<template>
    <b-row>
        <b-col cols="8">

            <h2> List Edge nodes </h2>

            <b-table
                :busy="isBusy"
                :items="myNodes" 
                :fields="fieldsNodes" 
                striped 
                responsive="sm">

                <template v-slot:cell(online)="data">

                    <b-badge v-show=data.item.online variant="success">Online</b-badge>
                    <b-badge v-show=!data.item.online variant="danger">Offline</b-badge>

                </template>                     

                <div slot="table-busy" class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>      
            </b-table>

            <hr/>

            <h2>List Virtual Devices</h2>

            <b-table
            :busy="isBusy"
            :items="mydevices" 
            :fields="fieldsDevices" 
            striped 
            responsive="sm">

                <template v-slot:cell(location)="data">
                    {{ data.item.location.name }}
                </template>

                <template v-slot:cell(node)="data">
                    <span v-b-tooltip.hover :title=data.item.node.name>{{ data.item.node.ip }}</span>
                </template>

                <template v-slot:cell(status)="row">
                    <b-button v-show=!row.item.dockerId variant="secondary" size="sm" class="mr-2">
                        <v-icon name="stop-circle"></v-icon>
                    </b-button>

                    <b-button v-show=row.item.dockerId variant="success" size="sm" class="mr-2">
                        <v-icon name="play-circle"></v-icon>
                    </b-button>
                </template>

                <div slot="table-busy" class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </b-table>

            <hr/>

            <h2>List VMS</h2>

            <b-table
            :busy="isBusy"
            :items="mytypevms" 
            :fields="fieldstypevms" 
            striped 
            responsive="sm">

                <template slot="[dockerImage]" slot-scope="row">
                    {{ row.item.dockerImage }}
                </template>

                <template v-slot:cell(actions)="row">
                    <b-button variant="success" size="sm" @click="newVms(row.item)" class="mr-2">
                        <v-icon name="play-circle"></v-icon>
                        Start
                    </b-button>

                    <b-button variant="primary" size="sm" @click="editVmsType(row.item)" class="mr-2">
                        <v-icon name="edit-2"></v-icon>
                    </b-button>

                    <b-button variant="danger" size="sm" @click="removeVmsType(row.item)" class="mr-2">
                        <v-icon name="trash"></v-icon>
                    </b-button>
                </template>

                <div slot="table-busy" class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong> Loading...</strong>
                </div>
            </b-table>
        </b-col>

        <b-col cols="3" style="padding-left: 75px;">

            <h2> Load YAML </h2>
            <loading :active.sync="isLoading" :is-full-page="true"></loading>
            <b-alert :show=msg.show :variant=msg.type>
                {{ msg.text }}
            </b-alert>          

            <div>
                <label>File 
                    <b-form-file 
                    v-model="file"
                    :state="Boolean(file)"
                    placeholder="Select file..."
                    drop-placeholder="Drop file here..."
                    ></b-form-file> 
                    <b-button variant="primary" v-on:click="submitFile()">Submit</b-button>                    
                </label>                
            </div>     
        </b-col>
    </b-row >    
</template>

<script>
import { apiChain } from './api';
import { apiDevice } from '../device/api'
import { apiVmsType } from '../vmsType/api'
import { apiNode } from '../node/api'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    name: 'loadChain',
    components: {Loading}, 
    data() {
        return {
            file:null,
            isBusy: true,
            isLoading: false,
            chainName: '',
            fieldsDevices: [{
                key: 'name',
            },{
                key: '_id'
            },{
                key:'location'
            },{
                key:'status',
                class: 'deviceIndexActions'
            }],
            fieldstypevms: [{
                key: 'name',
            },{
                key: '_id'
            },{
                key: 'listPorts'
            }],
            fieldsNodes: [{
                key: 'name'
            },{
                key: 'ip',
                label: 'IP',
                class: 'nodeIpList'
            },{
                key: 'online',
                label: 'Status',
                class: 'nodeStatusList'
            }],
            msg: {
                text: false,
                type: '',
                show: false
            },
            response: {
                status: false,
                results:[{
                ip: '',
                port: ''
                }]
            },
            mydevices: [],
            mytypevms: [],
            myNodes: []
        }
    },
    methods: {
        botonTest() {
            console.log('HAGO CLIC EN EL BOTTON TEST')
        },
        async handleFileUpload() {
            console.log("HICE CLIC EN UPLOAD FILE:", this.file)           
        },
        submitFile() {

            this.isLoading = true 

            if(!this.file){

                this.$swal.fire({
                title: 'No File selected',
                text: `Please select a file in YAML format.`,
                type: 'Error',
                showCancelButton: true,                
                //confirmButtonText: 'Yes, delete it!'
                })
                this.isLoading = false

            }else{
                let dataForm = new FormData();
                dataForm.append(`file`, this.file);

                apiChain.newChainFile( dataForm )
                    .then((data) => {
                        this.msg.text = "SERVICE CHAIN CREATED"
                        this.msg.type = "success"
                        this.msg.show = true
                        this.isLoading = false

                        console.log('RESPUESTA DE BACK...', data)

                        if(data.status) {
                            this.chainName = data.nameChain
                            this.response.status = data.status
                            this.response.results = data.data
                        }
                    }).catch(e => {
                        this.msg.text = `SERVICE CHAIN CREATED`
                        this.msg.type = "success"
                        this.msg.show = true
                        this.isLoading = false

                        console.log('RESPUESTA DE BACK...', e)

                        if(e.status) {
                            this.chainName = e.nameChain
                            this.response.status = e.status
                            this.response.results = e.data
                        }
                    })
            }   
        },
        refreshDevices() {
            this.isBusy = true
            this.isLoading = false
            apiDevice.getDevices()
                .then((data) => {

                    for (let i = 0; i < data.length; i++) {
                        if (data[i].node == null) {
                            data[i].node = []
                            data[i].node['name'] = "ALERT - Edge Node Removed"
                        }
                    }

                    this.mydevices = data
                    this.isBusy = false

                    console.log( 'my devices', this.mydevices )
                })
                .catch(e => {
                    console.log(e)
                    this.isBusy = false
                })
        },
        refreshtypevms() {
            this.isBusy = true
            apiVmsType.getVmsTypesVms()
                .then((data) => {
                    this.mytypevms = data
                    this.isBusy = false

                    console.log('myvms', this.mytypevms)
                })
                .catch(e => {
                    console.log(e)
                    this.isBusy = false
                })
        },
        refreshNodes() {
            this.isBusy = true
            this.isLoading = false
            apiNode.getNodes()
                .then((data) => {
                    this.myNodes = data
                    this.isBusy = false
                })
                .catch(e => {
                    console.log(e)
                    this.isBusy = false
                })
        }

    },
    created() {
        this.refreshDevices()
        this.refreshtypevms()
        this.refreshNodes()
    }
}
</script>

<style>

</style>
