<template>
    <b-row>
        <b-col cols="4">
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
        </b-col>

        <b-col cols="5" style="padding-left: 50px;">
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

            <!--

            <h2> Load chain model </h2>
            <h1>{{chainName}} </h1>  

            <h2> Publicado en </h2>
            <h1><b>IP: </b>{{response.results[0].ip}}<b> PORT: </b> {{response.results[0].port}}</h1>

            -->

            <div>
                <label>File
                    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                </label>
                <b-button variant="primary" v-on:click="submitFile()">Submit</b-button>
            </div> 
    <!--
            <div>
                <label>File2
                    <input type="file" @change="handleFileUpload( $event )" />
                </label>
                <button v-on:click="activate( )">Submit</button>
            </div>  -->
        </b-col>
    </b-row >    
</template>

<script>
import { apiChain } from './api';
import { apiDevice } from '../device/api'
import { apiVmsType } from '../vmsType/api'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    name: 'loadChain',
    components: {Loading}, 
    data() {
        return {
            isBusy: true,
            file: '',
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
            mytypevms: []
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

            //env.preventDefault()
            this.isLoading = true;

            let form = {
                name: 'test XXXX',
                description: 'description test'
            }

            apiChain.newChainFile( form )
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

                })
                .catch(e => {
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
        },
        activate() {
            console.log('HICE CLIC EN activate')
            this.isLoading = true; 
            setTimeout(this.submitFile2, 5000)            
        },
        submitFile2(){

            console.log('ENTRE A submitFile2 ')            
            //this.isLoading = true;

            //this.activate();
            this.msg.text = "Multimedia chain created"
            this.msg.type = "success"
            this.msg.show = true
            this.isLoading = false


            

            /*
            const data = loadYamlFile('/home/franklin/Desktop/test.yml')
            console.log('mi data', data);*/


            /*
            try {
                let name = 'test.yml'
                console.log('direccion', name);
                const data = yaml.load( await fs.promises.readFile(name, 'utf8'))
                console.log('mi data es:', data);
            } catch(e) {
                console.error('fallo en cargar el yaml', e)
            }*/
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
        }

    },
    created() {
        this.refreshDevices()
        this.refreshtypevms()
    }
}
</script>

<style>

</style>
