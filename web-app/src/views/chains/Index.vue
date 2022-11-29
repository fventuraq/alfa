<template>
    <div>
        <loading :active.sync="isLoading" :is-full-page="true"></loading>

        <b-row>
            <b-col>
                <h2>
                    <v-icon style="width: 32px;" name="settings"></v-icon>
                       List Multimedia service chains
                </h2>
            </b-col>

            <b-col class="text-right">
            <b-button to="/chains/load" variant="success" class="mr-2">
                <v-icon name="plus"></v-icon>
                Load chain
            </b-button>
            <b-button to="/chains/new" variant="success" class="mr-2">
                <v-icon name="plus"></v-icon>
                Create New Chain
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

            <template v-slot:cell(name)="row">
                {{row.item.name}}
            </template>

            <template v-slot:cell(description)="row">
                {{row.item.description}}
            </template>

            <template v-slot:cell(actions)="row">            
                <b-button title="Bind / Unbind" variant="success" size="sm" @click="startChain(row.item)" class="mr-2">
                    <v-icon name="minimize-2"></v-icon>
                </b-button>

                <b-button title="Stop" variant="danger" size="sm" @click="stopChain(row.item)" class="mr-2">
                    <v-icon name="stop-circle"></v-icon>
                </b-button>

                <b-button title="Edit" variant="primary" size="sm" @click="editChain(row.item)" class="mr-2">
                    <v-icon name="edit-2"></v-icon>
                </b-button>

                <b-button title="Delete" variant="danger" size="sm" @click="deleteChain(row.item)" class="mr-2">
                    <v-icon name="trash"></v-icon>
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
            There are no Service Chain yet!            
        </b-alert>

        <b-row>
            <b-col class="text-right">
                <strong>Total: {{items.length }}</strong>
            </b-col>
        </b-row>

    </div>
</template>

<script>

import Loading from 'vue-loading-overlay';
import { apiChain } from './api'

export default {    
    name: 'index',
    components: {Loading},
    data() {
        return {
            isBusy: true,
            isLoading: false,
            sdp: '',
            fields: [{
                key: 'name',
                label: 'Name'
            }, {
                key: 'description',
                label: 'Description'
            },{
                key: 'subnet',
                lebel: 'Sub Network'
            },{
                key: 'actions',
                class: 'actions'
            }],
            items:[],
            msg: {
                text: false,
                type: '',
                show: false
            }
        }
    },

    methods: {

        monitor(){

        },
        refresh() {
            this.isLoading = false;
            apiChain.getAllChain()
                .then((resp) => {
                    this.items = resp
                    this.isBusy = false
                    this.isLoading = false
                })
                .catch(e => {
                    console.log(e);
                    this.isBusy = false
                    this.isLoading = false
                })
        },

        stopChain(){},
        startChain(){},
        //stopChain(){},
        deleteChain(){},
    },
    created() {
        this.refresh()
    }
}


</script>
