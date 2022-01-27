<template>
    <div>
        <h2>New Virtual Type</h2>

        <b-alert :show="msg.show" :variant=msg.type>
            {{ msg.text }}
        </b-alert>

        <b-form @submit="onSubmit">

            <b-form-group id="input-group-6" label="Type:" label-for="src" style="width: 20%">
                <b-row>
                    <b-col>
                        <b-form-radio v-model="form.src" name="src" value="0">VMS</b-form-radio>
                    </b-col>

                    <b-col>
                        <b-form-radio v-model="form.src" name="src" value="1">Device</b-form-radio>
                    </b-col> 
                </b-row>
            </b-form-group>

            <b-form-group id="input-group-1" label="Name:" label-for="name">
                <b-form-input id="name" v-model="form.name" type="text" required/>
            </b-form-group>

            <b-form-group id="input-group-2" label="Docker Image:" label-for="dockerImage">
                <b-form-input id="dockerImage" v-model="form.dockerImage" type="text"/>
            </b-form-group>

            <b-form-group id="input-group-3" label="Startup Parameters:" label-for="startupParameters">
                <b-form-input id="startupParameters" v-model="form.startupParameters" type="text"/>
            </b-form-group>

            <b-form-group id="input-group-4" label="Description:" label-for="description">
                <b-form-input id="description" v-model="form.description" type="text"/>
            </b-form-group>            

            <b-form-group v-show="form.src == 0" id="input-group-6" label="Ports (if more than one use ';'):" label-for="ports">
                <b-form-input id="ports" v-model="form.ports" type="text" style="width: 200px"/>
            </b-form-group>

            <div v-show="form.src == 0">

            <span><b> Data stream input type and port</b></span>
            <form ref="formPort" @submit.stop.prevent="handleSubmitPort">
                <b-row>
                <b-col>
                    <br/>
                    <b-form-select id="input-group-7" v-model="formPort.inputType" :options="inputTypeOptions"></b-form-select>              
                </b-col>

                <b-col>
                    <b-form-group id="input-group-8" label="Add PORT:" label-for="port">
                        <b-form-input id="port" v-model="formPort.port" type="text" autocomplete="off" required/>                            
                    </b-form-group>
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
            :items="form.listPorts" 
            :fields="ports" 
            striped 
            responsive="sm">
                <template v-slot:cell(myInputType)="ports">
                        {{ ports.inputType }}
                </template>
                <template v-slot:cell(myPort)="ports">
                    {{ ports.port }}
                </template>
                <template v-slot:cell(actions)="row">
                    <b-button variant="danger" size="sm" @click="removePort(row.item)" class="mr-2">
                        <v-icon name="trash"></v-icon>
                    </b-button>
                </template>

            </b-table>

            </div>

            <div>
                <b-form-group id="input-group-8" label="Connectivity Type:" label-for="connectivityType">
                    <b-row>
                        <b-col>
                            <b-form-select id="input-group-7" v-model="form.connectivityType.layerProtocol" :options="listLayerProtocol"></b-form-select>
                        </b-col>

                        <b-col>
                            <b-form-select id="input-group-7" v-model="form.connectivityType.flowPatter" :options="listFlowPatter"></b-form-select>              
                        </b-col>
                    </b-row>
                </b-form-group>
            </div>

            <b-form-group v-show="form.src == 0" id="input-group-6" label="SDP File:" label-for="sdp">
                <textarea v-model="form.sdp" name="" id="" cols="90" rows="5">
                </textarea>
<pre>
v=0 \n \
c=IN IP4 127.0.0.1 \n \
m=video ${port} RTP/AVP 96 \n \
a=rtpmap:96 H264/90000 \n \
a=fmtp:96 media=video; clock-rate=90000; encoding-name=H264; sprop-parameter-sets=Z2QAFKzZQUH7AWoMAgtKAAADAAIAAAMAeR4oUyw\=\,aOvssiw\=
</pre>

            </b-form-group>

            <b-row>
                <b-col>
                    <b-button type="submit" variant="primary">Save</b-button>
                </b-col>
                <b-col class="text-right">
                    <b-button to="/vmsType" variant="secondary">Back</b-button>        
                </b-col>
            </b-row>
        </b-form>
  </div>
</template>

<script>
import {apiVmsType} from './api'

export default {
    name: 'vmsTypeNew',
    data() {
        return {
            isBusy: true,
            form: {
                name: '',
                dockerImage: '',
                startupParameters: '',
                description: '',
                src: 1,
                sdp: '',
                ports: 5000,
                listPorts: [],
                connectivityType: {
                    layerProtocol: null,
                    flowPatter: null
                }
            },
            inputTypeOptions:[
                {value: null, text: "Please select input Type"},
                {value:'video', text: "Video"},
                {value:'audio', text: "Audio"},
                {value:'videoeaudio', text: "Audio & Video"},
                {value:'text', text: "Text"}
            ],
            listFlowPatter:[
                {value: null, text: "Please select flow Patter type"},
                {value:'line', text: "Line"},
                {value:'tree', text: "Tree"},
                {value:'mesh', text: "Mesh"}
            ],
            listLayerProtocol:[
                {value: null, text: "Please select Layer Protocol"},
                {value:'ethernet', text: "Ethernet"},
                {value:'ipv4', text: "IPV4"},
                {value:'ipv6', text: "IPV6"},
            ],
            formPort:{
                inputType: null,
                port: ''
            },
            ports: [
                {
                    key: 'inputType',
                    label: 'Output Type'
                },{
                    key: 'port',
                    label: 'PORT'
                },{
                    key: 'actions',
                    class: 'portIndexActions3'
                }
            ],
            listPorts:[],            
            msg: {
                text: false,
                type: '',
                show: false
            }
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            apiVmsType.newVmsType(this.form)
                .then(() => {
                    this.msg.text = "VMS Type saved"
                    this.msg.type = "success"
                    this.msg.show = true
                })
                .catch((e) => {
                    this.msg.text = `Error when saving VMS Type ${e}`
                    this.msg.type = "danger"
                    this.msg.show = true
                })
        },
        handleSubmitPort(evt){
            evt.preventDefault()
            this.listPorts.push(this.formPort)
            this.formPort = {}
            this.form.listPorts = this.listPorts           
        },
        removePort(value){
            for(let i = 0; i < this.listPorts.length; i++){
                if ( value.port == this.listPorts[i].port) {
                    this.listPorts.splice(i, 1)
                    this.form.listPorts = this.listPorts
                    break
                }
            }            
        }
    }
}
</script>