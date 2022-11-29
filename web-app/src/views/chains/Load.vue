<template>
    <div>
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
    </div>    
</template>

<script>
import { apiChain } from './api';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    name: 'loadChain',
    components: {Loading}, 
    data() {
        return {
            file: '',
            isLoading: false,
            chainName: '',
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
            }
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
        }

    },
    created() {

    }
}
</script>

<style>

</style>
