const chainModel = require("../models/chainModel")
const networkModel = require("../models/networkModel")
const vmsModel = require("../models/vmsModel")
const deviceModel = require("../models/deviceModel")
const vmsController = require("../controllers/vmsController")

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

async function test2(vmsTypeID){
    console.log("ENTRE A TEST2", vmsTypeID)
    let result2 = await vmsTypeModel.findById(vmsTypeID)

    return result2
}

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
                    console.log(`ESTAs ES LA IP CARITA FECHERITA`, ip)
    
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

    console.log("TEMPORAsL", temp)

    return temp
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

            console.log("VMS QUE ENVIO A TEST()", req.body.vmss[i])

            //let data = await test3(req.body.vmss[i])
            

            let data = await test3(req.body.vmss[i])
            .then((data) => {
                console.log("ESTO LLEGA DE TEST", data)

                if(data || data.ip){

                    for(let v = i+1; v < req.body.vmss.length; v++){
                                                            
                        let tempVms = req.body.vmss[v]
                        console.log("ENTREe A CAMBsIAR LA IP:", tempVms.forWard[0])

                        for(let f = 0; f < tempVms.forWard.length; f++){
                            let temForWard = tempVms.forWard[f]
                            if(temForWard.name == req.body.vmss[i].name){

                                if(data.ip){
                                    req.body.vmss[v].forWard[f].ip = data.ip
                                    console.log('MI LISTA DE VMS DE FROnT', req.body.vmss[v].forWard[f])
                                }else{
                                    req.body.vmss[v].forWard[f].ip = "undefined"
                                }
                            }
                        }
                    }

                    myChain.vmss.push({
                        vms: data.vmsId,
                        virtualMemory: req.body.vmss[i].virtualMemory,
                        virtualCPU: req.body.vmss[i].virtualCPU
                    })

                }

                return data
            })

            contador++

            if( contador == req.body.vmss.length){

                return res.status(201).json(data.data)
            }

        }



    }


}

module.exports = chainController