<template>
    <div>
        <loading :active.sync="isLoading" :is-full-page="true"></loading>

        <b-alert :show="msg.show" :variant=msg.type>
            {{ msg.text }}
        </b-alert>

        <b-row>
            <b-col>
                <h2>
                    <v-icon style="width: 32px;" name="settings"></v-icon>
                       List sub networks in dockers
                </h2>
            </b-col>

            <b-col class="text-right"> 

                <b-button variant="primary" size="sm" @click="showModalNetwork()" class="mr-2">                    
                    New
                </b-button> 
            </b-col>
        </b-row>

        <b-table
            small
            :busy="isBusy"
            :items="items" 
            :fields="fields" 
            striped 
            responsive="sm">

            <template v-slot:cell(dockerNetworkId)="row">
                {{row.item.dockerNetworkId }}
            </template>

            <template v-slot:cell(name)="row">
                {{row.item.name }}
            </template>

            <template v-slot:cell(subnet)="row">
                {{row.item.subnet }}
            </template>

            <template v-slot:cell(actions)="row">            
                <b-button title="Bind / Unbind" variant="success" size="sm" @click="startNetwork(row.item)" class="mr-2">
                    <v-icon name="minimize-2"></v-icon>
                </b-button>

                <b-button title="Stop" variant="danger" size="sm" @click="stopNetwork(row.item)" class="mr-2">
                    <v-icon name="stop-circle"></v-icon>
                </b-button>

                <b-button title="Edit" variant="secondary" size="sm" @click="editNetwork(row.item)" class="mr-2">
                    <v-icon name="stop-circle"></v-icon>
                </b-button>
            </template> 

            <div slot="table-busy" class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
            </div>            
        </b-table>
        <b-alert 
            variant="secondary" 
            class="text-center" 
            :show=!items.length>
            There are no network stopped!
        </b-alert>

        <b-modal        
            cancel-only
            size="lg"
            ref="networkModal" 
            id="modal-newNetwok" 
            title="Create sub network"
            @show="resetModal"
            @hidden="resetModal"
            @ok="createNetwork">

            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                label="Name"
                label-for="name-input"
                invalid-feedback="Name is required"
                :state="nameState"
                >
                    <b-form-input
                        id="name-input"
                        v-model="form.name"
                        :state="nameState"
                        autocomplete="off"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                label="Subnet"
                label-for="subnet-input"
                invalid-feedback="Subnet is required"
                :state="subnetState"                
                >
                    <b-form-input
                        id="subnet-input"
                        v-model="form.subnet"
                        :state="subnetState"
                        autocomplete="off"
                        required
                    ></b-form-input>
                </b-form-group>
            </form>

        </b-modal>
        
    </div>
</template>

<script>

import {apiNetwork} from './api'
import Loading from 'vue-loading-overlay';

export default {
    name: 'index',
    components: {Loading},
    data() {
        return {
            isBusy: true,
            isLoading: false,
            sdp: '',
            nameState: null,
            subnetState: null,
            fields: [{
                key: 'dockerNetworkId',
                label: 'Network ID'
            },{
                key: 'name',
                label: 'Name'
            },{
                key: 'subnet',
                label: 'SubNet'
            },{
                key:'actions',
                class: 'networkIndexActionsStopped'
            }],
            form:{
                name: 'name',
                subnet: 'subnet'
            },
            items: [],
            msg: {
                text: false,
                type:'',
                show: false
            }
        }
    },
    methods: {
        showModalNetwork( ){
           this.$refs['networkModal'].show()
        },
        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.nameState = valid
            this.subnetState = valid
            return valid
        },
        resetModal() {
            this.form.name = ''
            this.nameState = null
            this.form.subnet = ''
            this.subnetState = null
        },
        createNetwork( ){
            console.log('mi formulario', this.form.name, this.form.subnet);
             // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
                return
            }

            this.isLoading = true;
            // Push the name to submitted names
            //this.form.push(this.name)
            apiNetwork.newNetwork(this.form)
                .then(() => {
                    console.log('entro al THEN');
                    this.msg.text = "NETWORK created"
                    this.msg.type = "success"
                    this.msg.show = true
                    this.isLoading = false
                    this.resetModal()
                    this.refresh()
                })
                .catch((e) => {
                    console.log('entro al CATCH');
                    console.log(e)
                    this.msg.text = `Error when creating NETWORK ${e}`
                    this.msg.type = "danger"
                    this.msg.show = true
                    this.isLoading = false
                    //temporal
                    this.resetModal()
                })            
            // Hide the modal manually            
            this.$nextTick(() => {
            this.$bvModal.hide('modal-prevent-closing')
            })
        },
        refresh() {
            this.isBusy = true
            apiNetwork.getAllNetwork()
                .then((data) => {

                    this.items = data
                    this.isBusy = false
                    this.isLoading = false;
                })                
                .catch(e => {
                    this.isBusy = false
                    console.log(e)
                })
        },
        stopNetwork( network ){
            let that = this;
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, stop it!'
            }).then((result) => {
                if(result.value) {
                    that.isLoading = true
                    apiNetwork.stopNetwork( network )
                        .then(() => {
                            that.refresh()
                            that.msg.text = "NETWORK stopped"
                            that.msg.type = "success"
                            that.msg.show = true
                            that.isLoading = false;
                        })
                        .catch(e => {
                            that.msg.text = `${e}`
                            that.msg.type = "danger"
                            that.msg.show = true
                            that.isLoading = false;
                            console.log(e)
                        })
                }
            })
        }

    },
    created() {
        this.refresh()
    }

}
</script>

<style>
    .networkIndexActionsStopped {
        width: 315px;
        text-align: center;
    }
</style>
