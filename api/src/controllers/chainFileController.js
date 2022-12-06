const yaml = require('js-yaml');
const fs = require('fs');

const chainModel = require("../models/chainModel")
const vmsModel = require("../models/vmsModel")
const deviceModel = require("../models/deviceModel")

const MQTT = require("async-mqtt");
const docker = require("../util/dockerApi")

const path = require('path');
const crypto = require('crypto')
const ra = require('./node/ra');
const vmsTypeModel = require("../models/vmsTypeModel")
const { isArray } = require("util")
const nodeModel = require("../models/nodeModel")
const cron = require("./node/cron")
const { Console, log } = require("console");
const maestroControllerAux = require('./maestro/aux');
//const vmsModel = require('../models/vmsModel');

async function runVms(vms, node) {
    //console.log( 'llego y vms node...', vms, node)
    let nodeIp = node
    let outputType = vms.forward[0].outputType

    const dirPath = path.join(__dirname, 'node/ra')
    let nodeResult = {}

    try {
        if( fs.existsSync(`${dirPath}/${nodeIp}.js`) ) {
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
    } catch (err) {}

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
    let startupParameters = vms.forward[0].ip + ' ' + vms.forward[0].port
    let portForward = vms.forWard2
    let id = vms.dockerId

    console.log('startupParameters....', vms.forward[0].ip + ' ' + vms.forward[0].port)

    console.log('startupParameters....', startupParameters)

    //console.log( 'vmsType...', vmsType)

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

    let api = await docker.api(nodeIp)

    let container = await api.createContainer(conf_container)

    let data = await container.start()

    var opts = {
        "filter": `{"id": ["${data.id}"]}`
    }

    let temp = await api.listContainers(opts)
    .then((container2) => {

        if(!id) {    
            cron.update()

            for(let k = 0; k < container2.length; k++){

                if(container2[k].Id == data.id){
                    var networkModel2 = process.env.DOCKER_OVERLAY_NETWORK
                    let ip = container2[k].NetworkSettings.Networks[networkModel2].IPAddress                    
    
                    if(ip) {
                        let datos = {
                            ip: ip,
                            data: data,
                            startupParameters: startupParameters,
                            nodeResult: nodeResult
                        }
    
                        return datos
                    }
                }
            }
            
        }
    })


    return temp

}

async function createVms( myVms, myVirtualLInk) {

    let vms = new vmsModel();
    let status = ''

    //vms.startupParameters = myVms.startupParameters
    vms.name = myVms.vmsName
    vms.node = myVms.nodeIp
    vms.vmsType = myVms.vmsType
    //vms.forward = []
    vms.forward.push({
        name: myVirtualLInk.destine.destineName,
        ip: myVirtualLInk.destine.destineIp,
        port: myVirtualLInk.destine.destinePort,
        outputType: myVirtualLInk.destine.inputType
    })

    nodeIp = myVms.nodeIp

    let dataRunVms = await runVms( vms, nodeIp)
    vms.dockerIp = dataRunVms.ip
    vms.dockerId = dataRunVms.data.id
    vms.node = dataRunVms.nodeResult._id   
    vms.startupParameters = dataRunVms.startupParameters                  

    //console.log( 'LLEGO NEW VMS..', vms )

    vms.save((err, vms) => {
        if(err) {
            return res.status(500).json({
                message: 'Error 1  when creating vmsType',
                error: err
            })
        }
    })

    cron.update()

    vmsChain = {
        vms: vms._id,
        virtualMemory: myVms.virtualMemory.size,
        virtualCPU: myVms.virtualCPU.numCpu,
        vnfConfigurableProperties: myVms.startupParameters
    }

    //chain.vmss.push(vmsChain)

    //let status = 'active'
    let ip = dataRunVms.ip

    response = {
        vmsChain: vmsChain,
        status: status,
        ip: ip
    }

    return response

}

function test(registerInDevice){

    console.log(new Date, 'ENTRO A registerInDevice')

    if(registerInDevice) {
        let resposen = { "ok":"ok" }
        return resposen
    } else {
        let resposen = {"error":"error"}
        return resposen
    }

}

function sleep(ms) {  
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function registerVmsInDevice2 ( params ) {

    await sleep(7000)
    
    let vmsId = params.forWard.vmsId
    let deviceId = params.deviceId
    let port = params.forWard.destinePort

    let registerInDevice = await maestroControllerAux.bindVMStoSRC(vmsId, deviceId, port)
    
    if(registerInDevice) {
        let resposen = { "ok":"ok" }
        return resposen
    } else {
        let resposen = {"error":"error"}
        return resposen
    }

}

async function registerVms( params ) {

    await sleep(5000)

    const mqtt_client = await MQTT.connectAsync(process.env.MQTT_SERVER) 

    let deviceId = params.deviceId
    let forWard = params.forWard
    let name = params.nameChain

    console.log('deviceId...........', deviceId)
    console.log('forWard.........', forWard)

    //let aux_name = `${forWard.port}${forWard.name}`
    let aux_name = `${name}${forWard.port}${forWard.name}`
    let pub_string = `${forWard.ip};${forWard.port};${aux_name};A`

    console.log('aux_name..', aux_name)
    console.log('pub_string..', pub_string)


    try {        
        await mqtt_client.publish(deviceId ,pub_string)
        await mqtt_client.end();

        return "TERMINE DE ADICIONAR el forward"

    } catch (e){
        console.log(e.stack)
    } 

}

const chainFileController = {

    post: async ( req, res, next ) => {  
        
        if(!req.files) {            
            return res.status(500).json("file is not fund")            
        }

        let myFile = req.files[0]
        let basePath = myFile.destination + myFile.filename   

        try {
            const doc =  await yaml.load(fs.readFileSync(basePath, 'utf8'));

            let numVmss = doc.chainModel.vmss.length;

            let device = doc.chainModel.devices;
            let vmss = doc.chainModel.vmss;
            let virtualLink= doc.chainModel.virtualLinks;

            let chain = chainModel();
            chain.name = doc.chainModel.chainName
            let nameChain = doc.chainModel.chainName

            let data = []

            //CREATE NODOS FINALES DE LA CADENA DE SERVICIO MULTIMEDIA

            for(let i = 0; i < virtualLink.length; i++) {
                
                if(virtualLink[i].destine.destineIp) {

                    for( let v = 0; v < vmss.length; v++) {
                        if( vmss[v].vmsName === virtualLink[i].origin.originName) {

                            let responseVms = await createVms( vmss[v], virtualLink[i])

                            chain.vmss.push(responseVms.vmsChain)
                            vmss[v].status = responseVms.status
                            vmss[v].ip = responseVms.ip  
                            
                            data.push({ ip:virtualLink[i].destine.destineIp, port:virtualLink[i].destine.destinePort })
                            
                            for(let p = 0; p<virtualLink.length; p++){
                                if( virtualLink[p].destine.destineName === vmss[v].vmsName ){
                                    virtualLink[p].destine.destineIp = responseVms.ip
                                    virtualLink[p].destine.vmsId = responseVms.vmsChain.vms  
                                }
                            }

                        }

                    }

                }

            }
            

            for( let j = 0; j < vmss.length ; j++) {

                
                //console.log('ACTIOVE O NO', vmss[j])
                if(vmss[j].ip) {
                    let temName = vmss[j].vmsName

                    for ( let k = 0; k< virtualLink.length ; k++) {
                        if( virtualLink[k].destine.destineName === temName && virtualLink[k].origin.originType ==='vms'){                            
                            virtualLink[k].destine.destineIp = vmss[j].ip        

                            for( let v = 0; v < vmss.length; v++) {
                                if(vmss[v].vmsName === virtualLink[k].origin.originName){

                                    let responseVms = await createVms( vmss[v], virtualLink[k])
                                    console.log( 'RESPONSE OF CREARE VMS MID..', responseVms)

                                    chain.vmss.push(responseVms.vmsChain)
                                    vmss[v].status = responseVms.status
                                    vmss[v].ip = responseVms.ip

                                    console.log( 'LLEGO NEW VMS FOR CHAIN...', chain )
                                    console.log( 'ID DEL VMS EN MONGO...', responseVms.vmsChain.vms)

                                    for(let p = 0; p<virtualLink.length; p++){
                                        if( virtualLink[p].destine.destineName === vmss[v].vmsName ){
                                            virtualLink[p].destine.destineIp = responseVms.ip
                                            virtualLink[p].destine.vmsId = responseVms.vmsChain.vms   
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            console.log( 'ESTATUS DE MI DATA.....', virtualLink)
            console.log( 'ESTATUS DE MI DATA.....', device)

            for( let k = 0; k < virtualLink.length; k++){
                if( virtualLink[k].origin.originType === 'device'  ){

                    for(let m = 0; m<device.length; m++){
                        if(virtualLink[k].origin.originName === device[m].deviceName){

                            let params = {
                                deviceId: device[m].deviceId,
                                forWard: virtualLink[k].destine,
                                nameChain: nameChain
                            }
                            
                            let registerVmsInDevice = await registerVmsInDevice2( params );                            
        
                            //let registerVmsInDevice = await registerVms(params);
                            console.log( 'REGISTRE UN VMS EN UN DEVICE', registerVmsInDevice )
                        }                       


                    }
                    
                }

                console.log( 'k-...', k)

                if( k == virtualLink.length - 1){
                    let response = {
                        nameChain: nameChain,
                        status: true,
                        response: 'llego',
                        data: data
                    }
                    
            
                    return res.status(201).json(response);
                }

            }
            

        } catch (e) {            
            let response = {
                nameChain: '',
                status: false,
                response: 'no funciono',
                data: []
            }

            return res.status(422).send(e);
        
        }

        
    }
}

module.exports = chainFileController