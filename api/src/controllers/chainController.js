const chainModel = require("../models/chainModel")
const networkModel = require("../models/networkModel")
const vmsModel = require("../models/vmsModel")
const deviceModel = require("../models/deviceModel")
const vmsController = require("../controllers/vmsController")
const MQTT = require("async-mqtt");
const maestroControllerAux = require("./maestro/aux")

const docker = require("../util/dockerApi")

const path = require('path');
const fs = require('fs')
const crypto = require('crypto')
const ra = require('./node/ra');
const vmsTypeModel = require("../models/vmsTypeModel")
const { isArray } = require("util")
const nodeModel = require("../models/nodeModel")
const cron = require("./node/cron")
const { Console } = require("console")

async function test3(vms) {
    
    let nodeIp = vms.node
    let outputType = vms.forWard[0].outputType

    const dirPath = path.join(__dirname, 'node/ra')
    let nodeResult = {}

    try {
        if (fs.existsSync(`${dirPath}/${nodeIp}.js`)) {
            vmsType = await vmsTypeModel.findById(vms.vmsType)
                .then((result) => {
                    return result
                })
            nodeResult = await ra.nodeSelection(vmsType.dockerImage, nodeIp, vms)
            nodeIp = nodeResult.ip
        } else {
            await nodeModel.findOne({
                'ip': nodeIp
            })
                .then((node) => {
                    nodeResult._id = node._id
                })
        }
    } catch (err){}

    let edgeNodeIsOnline = await nodeModel.findOne({ 'ip': nodeIp })
        .then((result) => {
            return result
        })
        .catch(function (err) {
            return res.status(500).json({
                message: 'Edge Node not founded',
                error: err
            })
        })

    if (!edgeNodeIsOnline.online) {
        return res.status(500).json({
            message: 'Edge is Offline',
            error: 'Edge is Offline'
        })
    }

    let vmsType = vms.vmsType
    let startupParameters = vms.forWard[0].ip + ' ' + vms.forWard[0].port
    let portForward = vms.forWard2
    let id = vms.id

    let result = await vmsTypeModel.findById(vmsType)

    let nameMonitor = ""
    if (result.dockerImage.trim() == 'alfa/vms/udp_flex') {
        let hash_name = crypto.createHash('md5').update(vms.name).digest("hex").substr(0, 5)

        nameMonitor = `${hash_name}${parseInt(Math.random() * 1000)}`
        startupParameters += `${nameMonitor}`
    }

    let conf_container = {
        Image: result.dockerImage,
        Cmd: [startupParameters],
        HostConfig: {
            NetworkMode: process.env.DOCKER_OVERLAY_NETWORK
        }
    }


    let containerPorts = {}
    let exposePorts = {}

    if (portForward && portForward.trim()) {

        let ports = portForward.split(";")

        ports.forEach(port => {
            let p = port.split(":")
            let aux_index = `${p[1]}/udp`
            let aux_port = `${p[0]}`
            containerPorts[aux_index] = [
                { "HostIp": "", "HostPort": aux_port }
            ]
            exposePorts[aux_index] = {}
        })

        conf_container['ExposedPorts'] = exposePorts
        conf_container['HostConfig']['PortBindings'] = containerPorts
    }    

    let api = await docker.api(nodeIp)

    let container = await api.createContainer(conf_container)

    let data = await container.start()

    var opts = {
        "filter": `{"id": ["${data.id}"]}`
    }

    let temp = await api.listContainers(opts)
    .then((container2) => {

        if(!id) {
            let myVms = new vmsModel({
                name: vms.name,
                dockerId: data.id,
                startupParameters: startupParameters,
                vmsType: vmsType,
                node: nodeResult._id,
                nameMonitor: nameMonitor,
                outputType: outputType,
                portForward: portForward,
                forWard: vms.forWard,
                bindedTo: []
            })
            
            myVms.save((err, myVms)=>{
                if (err) {
                    return res.status(500).json({
                        message: 'Error 1  when creating vmsType',
                        error: err
                    })
                }                
            })
    
            cron.update()

            for(let k = 0; k < container2.length; k++){

                if(container2[k].Id == myVms.dockerId){
                    var networkModel2 = process.env.DOCKER_OVERLAY_NETWORK
                    let ip = container2[k].NetworkSettings.Networks[networkModel2].IPAddress                    
    
                    if(ip) {
                        let datos = {
                            ip: ip,
                            vmsId: myVms._id,
                            data: data
                        }
    
                        return datos
                    }
                }
            }
            
        }
    })

    return temp
}

async function runDevice(tempDevice) {
    let id = tempDevice.id;

    let device = await deviceModel.findById(id)
        .populate('node')
        .exec()
        .then( device => {
            return device
        }).catch(err => {
            console.log(err)
            console.log("Edge Node Offline")
            return res.status(422).send(`${err.errors} Edge Node offline`);
        })

    let createParameters = {}
    createParameters.Image = device.connectionType
    createParameters.Cmd = [`${device.id} ${device.connectionParameters}`]

    if(device.physicalPath) {
        createParameters.HostConfig = {
            NetworkMode: process.env.DOCKER_OVERLAY_NETWORK,
            Devices: [{
                PathOnHost: device.physicalPath,
                PathInContainer: device.physicalPath,
                CgroupPermissions: "rwm"
            }]
        }
    } else {
        createParameters.HostConfig = {
            NetworkMode: process.env.DOCKER_OVERLAY_NETWORK,
        }
    }

    let api = await docker.api(device.node.ip)
                .then((api) => { 
                    return api
                }).catch(function(err){
                    console.log(err)
                    return err
                })

    let container = await api.createContainer(createParameters)
                        .then((container) => {
                            return container
                        }).catch(function(err) {
                            console.log(err)
                            return err
                        })

    let data = await container.start()
            .then((data) => {
                device.dockerId = data.id
                device.save()

                return data

            }).catch(function(err){
                console.log(err)
                return err
            })   

    let contador2 = 0

    for(let l = 0; l<tempDevice.forWard.length; l++){ 

        let params = {
            dockerDeviceId: data.id,
            deviceId: id,
            forWard: tempDevice.forWard[l]
        } 

        let resultAddForWard = await addForWard(params)
                                .then((result) => {
                                    contador2++
                                    return result
                                })  
    }  

    return data    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addForWard(params) {

    await sleep(7000)

    const mqtt_client = await MQTT.connectAsync(process.env.MQTT_SERVER)    

    let dockerDeviceId = params.dockerDeviceId
    let deviceId = params.deviceId
    let forWard = params.forWard

    let aux_name = `${forWard.port}${forWard.name}`
    let pub_string = `${forWard.ip};${forWard.port};${aux_name};A`

    try {        
        await mqtt_client.publish(deviceId.toString(),pub_string)
        await mqtt_client.end();

        return "TERMINE DE ADICIONAR el forward"

    } catch (e){
        console.log(e.stack)
    } 
}

const chainController = {

    list: (req, res, next) => {
        chainModel.find()
            .then(chains => {
                return res.status(201).json(chains);
            })
            .catch(err => {
                return res.status(422).send(err.errors);
            });
    },

    get: (req, res, next) => {
        let id = req.params.id;
        chainModel.findById(id)
            .then(chain => {
                return res.status(201).json(chain);
            })
            .catch(err => {
                return res.status(422).send(err.errors);
            });
    },

    post: async (req, res, next) => {

        let myChain = new chainModel({
            name: req.body.name,
            description: req.body.description,
            vmss: [],
            devices: []
        })

        let contador = 0

        for (let i = 0; i < req.body.vmss.length; i++) {

            let data = await test3(req.body.vmss[i])
            .then((data) => {

                if(data || data.ip){

                    for(let v = i+1; v < req.body.vmss.length; v++){
                                                            
                        let tempVms = req.body.vmss[v]

                        for(let f = 0; f < tempVms.forWard.length; f++){
                            let temForWard = tempVms.forWard[f]
                            if(temForWard.name == req.body.vmss[i].name){

                                if(data.ip){
                                    req.body.vmss[v].forWard[f].ip = data.ip                                    
                                    req.body.vmss[v].forWard[f].vmsId = data.vmsId                                    
                                }else{
                                    req.body.vmss[v].forWard[f].ip = "undefined"
                                }
                            }
                        }
                    }

                    for( let d = 0; d < req.body.devices.length; d++) {                        

                        for( w = 0; w < req.body.devices[d].forWard.length; w++) {
                            let temForWard = req.body.devices[d].forWard[w]

                            if(temForWard.name == req.body.vmss[i].name){
                                if(data.ip){

                                    req.body.devices[d].forWard[w].ip = data.ip
                                    req.body.devices[d].forWard[w].vmsId = data.vmsId
                                    
                                }else{
                                    req.body.devices[d].forWard[w].ip = "undefined"
                                }
                            }
                        }
                    }

                    myChain.vmss.push({
                        vms: data.vmsId,
                        virtualMemory: req.body.vmss[i].virtualMemory,
                        virtualCPU: req.body.vmss[i].virtualCPU
                    })

                    console.log("CHAIN VMS ADD", myChain)

                }

                return data
            })

            contador++

            let contador2 = 0

            if( contador == req.body.vmss.length){                

                for (z = 0; z < req.body.devices.length; z++) {

                    let deviceData = await runDevice(req.body.devices[z])
                    .then((data) => { 
                        contador2++                    
                        return data
                    })

                    myChain.devices.push(req.body.devices[z].id) 

                    console.log("CHAIN DEVICE ADD", myChain)

                    console.log("contador2 es:", contador2, " device lenght es: ", req.body.devices.length)

                    if(contador2 == req.body.devices.length){

                        console.log("ENTRO A GUARDAR LA CADENA DE SERVICIO:", contador2)

                        myChain.save((err, chain) => {
                            if(err) {
                                return res.status(500).json({
                                    message: 'Error when creating chain',
                                    error: err
                                });
                            }

                            console.log("LA RESPUESTA DE LA CADENA GUARDADA ES:---", chain)
                            return res.status(201).json(chain)
                        })
                    }

                }                

                //return res.status(201).json(data.data)
            }

        }



    }


}

module.exports = chainController