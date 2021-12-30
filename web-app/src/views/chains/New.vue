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

            <b-form-group id="input-group-3" label="Select sub-net:" label-for="subnet">
                <b-form-select required style="margin-top:0px!important" id="subnet" v-model="form.subnet" :options="listNetworks" size="sm" class="mt-3"></b-form-select>
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
                        <template v-slot:cell(devices.name)="data">
                            {{ data.myDevices.name }}
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

                        <template v-slot:cell(vmss.name)="data">
                            {{ data.myVmss.name }}
                        </template>

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
                    <b-form-select required style="margin-top:0px!important" id="device" v-model="device" :options="listDevices" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
            </form>

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
                <b-form-group id="input-group-3" label="Select VMS:" label-for="vms">
                    <b-form-select required style="margin-top:0px!important" id="vms" v-model="vms" :options="listVmss" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
            </form>

        </b-modal>
  </div>
</template>

<script>
import { apiChain } from './api'
import { apiVms } from '../vms/api'
import { apiDevice } from '../device/api'
import { apiNetwork } from '../network/api'

export default {
    name: 'vmsTypeNew',
    data() {
        return {
            isBusy: true,
            device:{},
            myDevices:[],
            devices: [{
                key: 'name',
                label: 'Name'
            },{
                key: 'ip',
                label: 'IP'
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
            vms:{},
            myVmss:[],
            vmss: [{                
                key: 'name',
                label: 'Name'   
            },{
                key: 'ip',
                label: 'IP'
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
                class: 'vmsIndexActions3'
            }],
            form: {
                name: '',
                description: '',
                subnet: {},
                devices: [],
                vmss: []
            },
            listDevices: [],
            listDevicesComplit: [],
            listVmss: [],
            listVmssComplit: [],
            listNetworks: [],
            listNetworksComplit: [],            
            msg: {
                text: false,
                type: '',
                show: false
            }
        }
    },
    methods: {
        showModalDevice(){
            this.$refs['deviceModal'].show()
        },
        resetModalDevice(){
            this.device={}
        },
        addDevice(){
            this.form.devices.push(this.device)

            let id = this.device

            for(let k = 0; k < this.listDevicesComplit.length; k++){                
                if(id == this.listDevicesComplit[k]._id){
                    this.myDevices.push(this.listDevicesComplit[k])                    
                }
            }
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
        },
        addVms(){
            this.form.vmss.push(this.vms)
            let id = this.vms

            for(let k = 0; k < this.listVmssComplit.length; k++){                
                if(id == this.listVmssComplit[k]._id){
                    this.myVmss.push(this.listVmssComplit[k])                    
                }
            }
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
                        if( vms._id == this.myVmss[i]._id){
                            this.myVmss.splice(i, 1)                            
                        }
                    }
                    for(let k = 0; k< this.form.vmss.length; k++){
                        if( vms._id == this.form.vmss[k]){
                            this.form.vmss.splice(k, 1)                            
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
</style>