<template>
    <div>
        <h2>New Service Chain</h2>

        <b-alert :show="msg.show" :variant=msg.type>
            {{ msg.text }}
        </b-alert>

        <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label="Name:" label-for="name">
                <b-form-input id="name" v-model="form.name" type="text" autocomplete="off" required/>
            </b-form-group>

            <b-form-group id="input-group-2" label="Description:" label-for="description">
                <b-form-input id="description" v-model="form.description" type="text" autocomplete="off" required/>
            </b-form-group>

            <b-row>
                <b-col>
                    <b-row>
                        <b-col>            
                            <h2>
                            <v-icon style="width: 32px;" name="send"></v-icon>
                                Devices
                            </h2>
                        </b-col>
                        <b-col class="text-right">
                            <b-button variant="success" size="sm" @click="showModalDevice()" class="mr-2"> 
                                <v-icon name="plus"></v-icon>                   
                                Add Device
                            </b-button>  
                        </b-col>
                    </b-row>
                    <b-table 
                    small
                    :busy="isBusy"
                    :items="myDevices" 
                    :fields="devices" 
                    striped 
                    responsive="sm">
                        <template v-slot:cell(devices)="data">
                            {{ data.myDevices.device.name }}
                        </template>
                        <template v-slot:cell(actions)="row">
                            <b-button variant="danger" size="sm" @click="removeDevice(row.item)" class="mr-2">
                                <v-icon name="trash"></v-icon>
                            </b-button>
                        </template>

                    </b-table>
                </b-col>
                <b-col>
                    <b-row>
                        <b-col>            
                            <h2>
                            <v-icon style="width: 32px;" name="send"></v-icon>
                                VMSs
                            </h2>
                        </b-col>
                        <b-col class="text-right">
                            <b-button variant="success" size="sm" @click="showModalVms()" class="mr-2"> 
                                <v-icon name="plus"></v-icon>                   
                                Add VMS
                            </b-button>  
                        </b-col>
                    </b-row>
                    <b-table
                    small
                    :busy="isBusy"
                    :items="myVmss" 
                    :fields="vmss" 
                    striped 
                    responsive="sm">
                        <template v-slot:cell(actions)="row">
                            <b-button variant="danger" size="sm" @click="removeVms(row.item)" class="mr-2">
                                <v-icon name="trash"></v-icon>
                            </b-button>
                        </template>
                        
                    </b-table>
                </b-col>
            </b-row>

            <b-row>
                <b-col class="text-right">
                    <b-button type="submit" variant="primary">Save</b-button>                    
                    <b-button to="/vmsType" variant="secondary">Cancel</b-button> 
                </b-col>                
            </b-row>

            <b-row>
                <b-col class="text-right">
                    <b-button variant="success" size="sm" @click="exportToJsonFile()" class="mr-2"> 
                        <!--<v-icon name="plus"></v-icon> -->
                        Export JSON
                    </b-button>                    

                    <input type="file" id="selectFiles" value="Import" /><br />

                    <b-button variant="primary" id="import" size="sm" @click="importJsonFile()" class="mr-2"> 
                        <!--<v-icon name="plus"></v-icon> -->
                        Import JSON
                    </b-button> 
                    
                    <textarea id="result"></textarea>

                    <b-button variant="primary" size="sm" @click="runJson()" class="mr-2"> 
                        <!--<v-icon name="plus"></v-icon> -->
                        RUN JSON
                    </b-button>

                    

                </b-col>

                <!--<b-col class="text-right">
                    <b-button variant="success" size="sm" @click="exportToXmlFile()" class="mr-2">                        
                        Export XML
                    </b-button>  
                </b-col>-->
            </b-row>
        </b-form>

        <b-modal 
            cancel-only
            size="lg"
            ref="deviceModal" 
            id="modal-device" 
            title="Add Device"
            @show="resetModalDevice"
            @hidden="resetModalDevice"
            @ok="addDevice">

            <form ref="formDevice" @submit.stop.prevent="handleSubmitDevice">
                <b-form-group id="input-group-3" label="Select Device:" label-for="device">
                    <b-form-select required style="margin-top:0px!important" id="device" v-model="device.id" :options="listDevices" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
            </form>

            <span><b>Add ForWards</b></span>

            <b-form-checkbox  id="isAddVms" v-model="isAddVms" switch>IS VMS</b-form-checkbox>

            <form ref="formForWard" @submit.stop.prevent="handleSubmitForWard2">
                <b-row>
                    <b-col>                            
                        <div v-if="isAddVms">                           
                        <b-form-group id="input-group-5" label="Select VMS:" label-for="ip">
                            <b-form-select required style="margin-top:0px!important" id="ip" v-model="formForWard.name" @input="selectVMSdestine" size="sm" class="mt-3">
                                <option v-for="option in myVmss" :value="option.name" :key="option.name">
                                    {{ option.name }}
                                </option>
                            </b-form-select>
                        </b-form-group>
                        </div>
                        
                        <div v-else>
                        <b-form-group id="input-group-5" label="Add IP:" label-for="ip">
                            <b-form-input id="ip" v-model="formForWard.ip" type="text" autocomplete="off" required/>                            
                        </b-form-group>
                        </div>
                    </b-col>

                    <b-col>
                        <div v-if="isAddVms">
                            <b-form-group id="input-group-5" label="Select PORT:" label-for="ip">
                                <b-form-select required style="margin-top:0px!important" id="ip" v-model="formForWard.port"  @input="selectPortDestine" size="sm" class="mt-3">
                                    <option v-for="option in miniListPorts" :value="option.port" :key="option.port">
                                        {{ option.port }}
                                    </option>
                                </b-form-select>
                            </b-form-group>
                        </div>

                        <div v-else>
                            <b-form-group id="input-group-5" label="Add PORT:" label-for="port">                                
                                <b-form-input id="port" v-model="formForWard.port" type="number" autocomplete="off" required/>
                            </b-form-group>
                        </div>
                    </b-col>

                    <b-col>
                        <div v-if="isAddVms">
                            <b-form-group id="input-group-5" label="Output Type:" label-for="outputType">
                                <b-form-input id="input-group-7" v-model="formForWard.outputType" type="text" autocomplete="off" readonly="readonly" required/>                            
                            </b-form-group>
                        </div>

                        <div v-else>
                            <b-form-group id="input-group-5" label="Output Type:" label-for="outputType">                           
                                <b-form-select id="input-group-7" v-model="formForWard.outputType" :options="outputTypeOptions"></b-form-select>
                            </b-form-group>
                        </div>
                    </b-col>

                    <b-col>
                        <br/>
                        <b-button type="submit" variant="success">Add</b-button>
                    </b-col>
                </b-row>
            </form>                 
                <b-table
                small
                :busy="isBusy"
                :items="device.forWard" 
                :fields="forWards" 
                striped 
                responsive="sm">
                    <template v-slot:cell(myIp)="forWards">
                        {{ forWards.ip }}
                    </template>
                    <template v-slot:cell(myPort)="forWards">
                        {{ forWards.port }}
                    </template>
                    <template v-slot:cell(actions)="row">
                        <b-button variant="danger" size="sm" @click="removeForWard(row.item)" class="mr-2">
                            <v-icon name="trash"></v-icon>
                        </b-button>
                    </template>
                </b-table>
        </b-modal>

        <b-modal 
            cancel-only
            size="lg"
            ref="vmsModal" 
            id="modal-vms" 
            title="Add VMS"
            @show="resetModalVms"
            @hidden="resetModalVms"
            @ok="addVms">

            <form ref="formVms" @submit.stop.prevent="handleSubmitVms">
                <b-form-group id="input-group-3" label="Name of VMS:" label-for="nameVms">
                    <b-form-input id="nameVms" v-model="vms.name" type="text" autocomplete="off" required/>
                </b-form-group>
                <b-form-group id="input-group-3" label="Select type of VMS:" label-for="vmsType">
                    <b-form-select required style="margin-top:0px!important" id="vmsType" v-model="vms.vmsType" :options="listTypesVms" @input="addAutomaticPorts()" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-table
                small
                :busy="isBusy"
                :items="vms.paramsPorts" 
                :fields="ports" 
                striped 
                responsive="sm">
                    <template v-slot:cell(myPort)="ports">
                        {{ ports.port }}
                    </template>
                    <!--<template v-slot:cell(actions)="row">
                        <b-button variant="danger" size="sm" @click="removePort(row.item)" class="mr-2">
                            <v-icon name="trash"></v-icon>
                        </b-button>
                    </template>-->

                </b-table>
                <b-form-group id="input-group-3" label="Select Edge node:" label-for="node">
                    <b-form-select required style="margin-top:0px!important" id="node" v-model="vms.node" :options="listNodes" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group id="input-group-3" label="Startup Parameters Init:" label-for="startupParameters">
                    <b-form-input id="startupParameters" v-model="vms.startupParameters" type="text" autocomplete="off" required/>
                </b-form-group>

                <b-row>
                    <b-col>
                        <b-form-group id="input-group-9" label="Num. Virtual Memory in (MBs):" label-for="virtualMemory">
                            <b-form-input id="virtualMemory"  v-model="virtualMemory" type="number" autocomplete="off" required/>
                        </b-form-group>
                    </b-col>

                    <b-col>
                        <b-form-group id="input-group-9" label="Num. Virtual CPUs" label-for="virtualCPU">
                            <b-form-input id="virtualCPU" v-model="virtualCPU" type="number" autocomplete="off" required/>
                        </b-form-group>
                    </b-col>
                </b-row>               

                <span><b>Add ForWards</b></span><br/>

                <b-form-checkbox  id="isAddVms" v-model="isAddVms" switch>IS VMS</b-form-checkbox>
                <!--<label for="isAddVms"> ->  IS VMS</label>-->

                <form ref="formForWard" @submit.stop.prevent="handleSubmitForWard">
                    <b-row>                  

                        <b-col>                            
                            <div v-if="isAddVms">                           
                            <b-form-group id="input-group-5" label="Select VMS:" label-for="ip">
                                <b-form-select required style="margin-top:0px!important" id="ip" v-model="formForWard.name" @input="selectVMSdestine" size="sm" class="mt-3">
                                    <option v-for="option in myVmss" :value="option.name" :key="option.name">
                                        {{ option.name }}
                                    </option>
                                </b-form-select>
                            </b-form-group>
                            </div>
                            
                            <div v-else>
                            <b-form-group id="input-group-5" label="Add IP:" label-for="ip">
                                <b-form-input id="ip" v-model="formForWard.ip" type="text" autocomplete="off" required/>                            
                            </b-form-group>
                            </div>
                        </b-col>

                        <b-col>
                            <div v-if="isAddVms">
                                <b-form-group id="input-group-5" label="Select PORT:" label-for="ip">
                                    <b-form-select required style="margin-top:0px!important" id="ip" v-model="formForWard.port"  @input="selectPortDestine" size="sm" class="mt-3">
                                        <option v-for="option in miniListPorts" :value="option.port" :key="option.port">
                                            {{ option.port }}
                                        </option>
                                    </b-form-select>
                                </b-form-group>
                            </div>

                            <div v-else>
                                <b-form-group id="input-group-5" label="Add PORT:" label-for="port">                                
                                    <b-form-input id="port" v-model="formForWard.port" type="number" autocomplete="off" required/>
                                </b-form-group>
                            </div>
                        </b-col>

                        <b-col>
                            <div v-if="isAddVms">
                                <b-form-group id="input-group-5" label="Output Type:" label-for="outputType">
                                    <b-form-input id="input-group-7" v-model="formForWard.outputType" type="text" autocomplete="off" readonly="readonly" required/>                            
                                </b-form-group>
                            </div>

                            <div v-else>
                                <b-form-group id="input-group-5" label="Output Type:" label-for="outputType">                           
                                    <b-form-select id="input-group-7" v-model="formForWard.outputType" :options="outputTypeOptions"></b-form-select>
                                </b-form-group>
                            </div>
                        </b-col>

                        <b-col>
                            <br/>
                            <b-button type="submit" variant="success">Add</b-button>
                        </b-col>
                    </b-row>
                </form> 
                <b-table
                small
                :busy="isBusy"
                :items="vms.forWard" 
                :fields="forWards" 
                striped 
                responsive="sm">
                    <template v-slot:cell(myName)="forWards">
                        {{ forWards.name }}
                    </template>
                    <template v-slot:cell(myPort)="forWards">
                        {{ forWards.port }}
                    </template>
                    <template v-slot:cell(actions)="row">
                        <b-button variant="danger" size="sm" @click="removeForWard(row.item)" class="mr-2">
                            <v-icon name="trash"></v-icon>
                        </b-button>
                    </template>

                </b-table>           
            </form>
        </b-modal>
  </div>
</template>

<script>
import { apiChain } from './api'
import { apiVms } from '../vms/api'
import { apiDevice } from '../device/api'
import { apiNetwork } from '../network/api'
import { apiVmsType } from '../vmsType/api'
import { apiNode } from '../node/api'

export default {
    name: 'vmsTypeNew',
    data() {
        return {
            virtualMemory: 0,
            virtualCPU: 0,
            limitForWard: 0,
            isAddVms: false,
            isBusy: true,
            device:{
                name:'',
                id:{},
                forWard: []
            },
            myDevices:[],
            devices: [{
                key: 'name',    
                label: 'Name'
            },{
                destine:[{
                    key: 'nameVms',
                    label: 'Name'
                },{
                    key: 'ip',
                    label: 'IP'
                }]
            },{
                key: 'actions',
                class: 'deviceIndexActions3'
            }],
            vms:{
                name: '',
                vmsType: {},
                node: {},
                startupParameters:'',
                virtualMemory:{},
                virtualCPU:{},
                paramsPorts:[],
                forWard: []
            },
            myVmss:[],
            vmss: [{                
                key: 'name',
                label: 'Name'   
            },{
                forWard:[{
                    key: 'ip',
                    label: 'IP'
                }]
            },{
                key: 'actions',
                class: 'vmsIndexActions3'
            }],
            formPort: {
                port: 0
            },
            listPorts:[],
            ports: [{
                key: 'port',
                label: 'PORT'
            },{
                key: 'inputType',
                label: 'Type'
            },{
                key: 'actions',
                class: 'portIndexActions3'
            }],
            formForWard: {
                name: '',                
                ip: '',
                port: '',
                outputType: null
            },
            listForWard: [],
            forWards: [{
                key: 'name',
                label: 'Name/IP'
            },{
                key: 'port',
                label: 'PORT'
            },{
                key: 'outputType',
                label: 'Output'
            },{
                key: 'actions',
                class: 'portIndexActions3'
            }],
            form: {
                name: '',
                description: '',
                devices: [],
                vmss: []
            },
            listDevices: [],
            listDevicesComplit: [],
            listVmss: [],
            listVmssComplit: [],
            listNetworks: [],
            listNetworksComplit: [],
            listTypesVms: [],  
            listNodes: [],
            miniListPorts: [],
            outputTypeOptions:[
                {value: null, text: "Please select output Type"},
                {value:'video', text: "Video"},
                {value:'audio', text: "Audio"},
                {value:'videoeaudio', text: "Audio & Video"},
                {value:'text', text: "Text"}
            ],          
            msg: {
                text: false,
                type: '',
                show: false
            }
        }
    },
    methods: {
        addAutomaticPorts(){
            this.listPorts = []
            this.vms.paramsPorts = this.listPorts

            for( let i = 0; i < this.listTypesVms.length; i++){
                if(this.vms.vmsType == this.listTypesVms[i].value){
                    this.listPorts = this.listTypesVms[i].inputPorts
                    this.vms.paramsPorts = this.listPorts

                    if(this.listTypesVms[i].connectivityType.flowPatter == 'line'){
                        this.limitForWard = 1
                        console.log( 'limit forward', this.limitForWard);
                    }else{
                        this.limitForWard = 100
                        console.log( 'limit forward', this.limitForWard);
                    }
                    break
                }
            }
        },
        showModalDevice(){
            this.$refs['deviceModal'].show()
        },
        resetModalDevice(){
            this.device={}
            this.listForWard = []
        },
        addDevice(){
            for( let i=0; i<this.listDevicesComplit.length; i++){               
                if(this.listDevicesComplit[i]._id == this.device.id){
                    this.device.name = this.listDevicesComplit[i].name
                    this.form.devices.push(this.device)
                    this.myDevices.push(this.device)
                    break
                }
            }

            console.log('DEVICES que se enviaran al back form devices', this.form.devices);
            console.log('DEVICES que se enviaran al back form devices', this.myDevices);
        },
        removeDevice(device){           
            
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {     
                if(result.value) {
                    for(let i = 0; i < this.myDevices.length; i++){
                        if( device._id == this.myDevices[i]._id){
                            this.myDevices.splice(i, 1)                            
                        }
                    }
                    for(let k = 0; k< this.form.devices.length; k++){
                        if( device._id == this.form.devices[k]){
                            this.form.devices.splice(k, 1)                            
                        }
                    }
                }
            })

        },
        showModalVms(){ 
            this.$refs['vmsModal'].show()
        },
        resetModalVms(){
            this.vms = {}
            this.listPorts = []
            this.listForWard = []
            this.formForWard = {
                    name: '',                
                    ip: '',
                    port: '',
                    outputType: null
                }
            this.virtualCPU = 0
            this.virtualMemory = 0
        },
        addVms(){
            let virtualMemory = {
                size: this.virtualMemory
            }
            let virtualCPU = {
                numCpu: this.virtualCPU
            }
            this.vms.virtualMemory = virtualMemory
            this.vms.virtualCPU = virtualCPU
            console.log('el vms nuevo es:', this.vms);
            this.form.vmss.push(this.vms)
            console.log('vms que se enviaran al back', this.form.vmss);
            this.myVmss.push(this.vms)
            console.log('vms que saldran en la lista', this.myVmss);
        },
        removeVms(vms){

            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {     
                if(result.value) {
                    for(let i = 0; i < this.myVmss.length; i++){
                        if( vms.name == this.myVmss[i].name){
                            this.myVmss.splice(i, 1) 
                            break                           
                        }
                    }
                    for(let k = 0; k< this.form.vmss.length; k++){
                        if( vms.name == this.form.vmss[k].name){
                            this.form.vmss.splice(k, 1) 
                            break                           
                        }
                    }
                }
            })

        },
        onSubmit( chain ) {
            console.log('el formulario es:', this.form);
            
            chain.preventDefault()
            this.isLoading = true 
            
            apiChain.newChain(this.form)
                .then(() => {
                    console.log('entro al THEN');
                    this.msg.text = "SERVICE CHAIN created"
                    this.msg.type = "success"
                    this.msg.show = true
                    this.isLoading = false
                })
                .catch(e => {
                    console.log('entro al CATCH');
                    console.log(e)
                    this.msg.text = `Error when creating SERVICE CHAIN ${e}`
                    this.msg.type = "danger"
                    this.msg.show = true
                    this.isLoading = false
                })
        },
        removePort(value){            
            for(let i = 0; i < this.listPorts.length; i++){
                if( value.port == this.listPorts[i].port){
                    this.listPorts.splice(i, 1) 
                    this.vms.paramsPorts = this.listPorts
                    break                          
                }
            }     
        },/*  
        handleSubmitPort(evt){
            evt.preventDefault()
            this.listPorts.push(this.formPort)
            this.formPort = {}
            this.vms.paramsPorts = this.listPorts
        },*/
        selectVMSdestine(){
            for( let i = 0; i < this.myVmss.length ; i++){
                if( this.formForWard.name == this.myVmss[i].name){

                    this.miniListPorts = this.myVmss[i].paramsPorts
                    break
                }
            }
        },
        selectPortDestine() {
            for( let i = 0; i < this.miniListPorts.length; i++){
                if ( this.formForWard.port == this.miniListPorts[i].port ){
                    this.formForWard.port = this.miniListPorts[i].port
                    this.formForWard.outputType = this.miniListPorts[i].inputType
                }
            }
        },
        removeForWard(value){
            console.log('hice clic en remover forWard', value);
            for(let i = 0; i < this.listForWard.length; i++){
                if( value.ip == this.listForWard[i].ip && value.port == this.listForWard[i].port){
                    this.listForWard.splice(i, 1) 
                    this.vms.forWard = this.listForWard
                    break                          
                }
            }
        },
        handleSubmitForWard(evt){
            evt.preventDefault()
            console.log('esto es lo que llega ', this.formForWard);

            if(this.listForWard.length < this.limitForWard){
                if( this.formForWard.name == ''){
                this.formForWard.name = this.formForWard.ip
                }
                this.listForWard.push(this.formForWard)
                this.formForWard = {
                    name: '',                
                    ip: '',
                    port: '',
                    outputType: null
                }
                this.vms.forWard = this.listForWard
            }else{

                this.$swal.fire({
                title: 'Limit Forward exceeded!',
                text: `This VMS accepts a maximum of ${this.limitForWard} destination connection, in case you want to add this connection, you will firs have to delete the existing connection`,
                type: 'warning',
                showCancelButton: true,
                //confirmButtonText: 'Yes, delete it!'
                })

            }
            
            
            console.log('hice clic en añadir forward');
        },
        removeForWard2(value){
            value.preventDefault()
            console.log('hice clic en remover forWard EN DEVICE', value);
            for(let i = 0; i < this.listForWard.length; i++){
                if( value.ip == this.listForWard[i].ip && value.port == this.listForWard[i].port){
                    this.listForWard.splice(i, 1) 
                    this.device.forWard = this.listForWard
                    break                          
                }
            }
        },
        handleSubmitForWard2(evt){
            evt.preventDefault()
            console.log('esto es lo que llega ', this.formForWard);

            if ( this.formForWard.name == ''){
                this.formForWard.name = this.formForWard.ip
            }

            this.listForWard.push(this.formForWard)
            this.formForWard = {
                name: '',
                ip: '',
                port: '',
                outputType: null
            }
            this.device.forWard = this.listForWard

            console.log('hice clic en añadir forward DEVICE');            
        },
        importJsonFile(){
            console.log("HICE CLIC EN IMPORT JSON");

            
            document.getElementById('import').onclick = function(){
                let files = document.getElementById('selectFiles').files
                console.log("mi file", files);

                if(files.length <= 0){
                    return false
                }

                let fr = new FileReader()
                
                fr.onload =function(e) {
                    let result = JSON.parse(e.target.result)

                    console.log("result es:", result)

                    this.form = result
                    this.myDevices = this.form.devices
                    this.myVmss = this.form.vmss

                    console.log("MIS DEVICES", this.myDevices);
                    console.log("MIS VMSS", this.myDevices);

                    console.log('FORM ES:', this.form);
                    let formatted = JSON.stringify(result, null, 2)

                    document.getElementById('result').value = formatted
                }

                fr.readAsText(files.item(0))
            }
        },
        runJson(){
            console.log("el formulario que envio es: ", this.form);
            apiChain.newChain(this.form)
                .then(() => {
                    console.log('entro al THEN');
                    this.msg.text = "SERVICE CHAIN created"
                    this.msg.type = "success"
                    this.msg.show = true
                    this.isLoading = false
                })
                .catch(e => {
                    console.log('entro al CATCH');
                    console.log(e)
                    this.msg.text = `Error when creating SERVICE CHAIN ${e}`
                    this.msg.type = "danger"
                    this.msg.show = true
                    this.isLoading = false
                })
        },
        exportToJsonFile(){

            console.log("HICE CLIC EN EXPORTAR A JSON :", this.form)

            
            let dataStr = JSON.stringify(this.form)
            let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)

            let exportFileDefaultName = `${this.form.name}.json`

            let linkElement = document.createElement('a')
            linkElement.setAttribute('href', dataUri)
            linkElement.setAttribute('download', exportFileDefaultName)
            linkElement.click()
        },
        exportToXmlFile(){

            console.log("HICE CLIC EN EXPORTAR A XML :", this.form)

            let dataStr = JSON.stringify(this.form)
            let tab = this.form.name

            let xmltext = this.jsonToXml(dataStr, tab)

            let fileName = `${this.form.name}.xml`
            let linkElement = document.createElement('a')
            let bb = new Blob([xmltext], {type: 'text/plain'})

            linkElement.setAttribute('href', window.URL.createObjectURL(bb))
            linkElement.setAttribute('donwload', fileName)

            linkElement.dataset.dowloadurl = ['text/plain', linkElement.download, linkElement.href].join(':')
            linkElement.draggable = true
            linkElement.classList.add('dragout')

            linkElement.click()
        },
        jsonToXml(o, tab){

            console.log("UTILICE LA FUNCION JSONTOXML :")
            let toXml = function(v, name, ind) {
                let xml = ""
                if(v instanceof Array) {
                    for(let i = 0, n=v.length; i<n; i++ ){
                        xml += ind + toXml(v[i], name, ind+"\t") + "\n"
                    }
                }else if(typeof(v) == "object") {
                    let hasChild = false
                    xml += ind + "<" + name
                    for(var m in v) {
                        if(m.charAt(0) == "@"){
                            xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\""
                        }else{ 
                            hasChild = true
                        }                        
                    }

                    xml += hasChild ? ">" : "/>"
                    if(hasChild) {
                        for(let m in v){
                            if(m == "#text"){
                                xml += v[m]
                            }else if(m == "#cdta"){
                                xml += "<![CDATA[" + v[m] + "]]>"
                            }else if(m.charAt(0) != "@"){
                                xml += toXml(v[m], m, ind+"\t")
                            }
                        }
                        xml += (xml.charAt(xml.length-1) == "\n"?ind:"") + "</" + name + ">"
                    }
                }else {
                    xml += ind + "<" + name + ">" + v.toString() + "</" + name +">"
                }
                return xml
            }, xml=""
            for ( let m in o){
                xml += toXml(o[m], m, "")
            }
            return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, "")
        },    
        firLoad() {
            for(let i = 0; i < this.form.devices.length; i++){
                
                for(let k = 0; k < this.listDevicesComplit.length; k++){                    
                    if(this.form.devices[i] == this.listDevicesComplit[k]._id){
                        this.myDevices.push(this.listDevicesComplit[k])                      
                    }
                }
            }
        }
    },
    created() {
        apiVms.getVmsToSelect()
            .then((listVmss) => {
                this.listVmss = listVmss
                console.log('lista de vms->',this.listVmss);
            })

        apiVms.getAllVms()
            .then((listVmss2) => {
                this.listVmssComplit = listVmss2
                console.log('lista de vms->',this.listVmssComplit);
            })
        
        apiVmsType.getVmsTypesToSelect()
            .then((listTypesVms) => {
                this.listTypesVms = listTypesVms
                console.log('lista de typesVms->', this.listTypesVms);
            })
        
        apiNode.getNodesForSelect()
            .then((listNodes) => {
                this.listNodes = listNodes
                console.log('loista de nodes->', this.listNodes);
            })
        
        apiDevice.getDevicesToSelect()
            .then((listDevices) => {
                this.listDevices = listDevices
                console.log('lista de device->',this.listDevices);
            })

        apiDevice.getDevices()
            .then((listDevices2) => {
                this.listDevicesComplit = listDevices2
                console.log('lista detallada de devices', listDevices2);                
            })
        
        apiNetwork.getAllNetwork()
            .then(listNetworksComplit => {
                this.listNetworksComplit = listNetworksComplit
            })
            
        apiNetwork.getNetworkToSelect()
            .then(listNetworks => {
                this.listNetworks = listNetworks                
            })
    }
}
</script>

<style>
    .vmsIndexActions3 {
        width: 80px;
        text-align: center;
    }
    .deviceIndexActions3 {
        width: 80px;
        text-align: center;
    }
    .portIndexActions3 {
        width: 80px;
        text-align: center;
    }
</style>