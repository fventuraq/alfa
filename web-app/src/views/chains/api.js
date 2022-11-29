import { config } from '../../config'

export const apiChain = {

    newChain( chain ) {
        if(!chain) {
            return Promise.reject(new Error('Data not informed'))
        }

        return new Promise((resolve, reject) => {
            config.api.post(`/chain/`, chain)
                .then(resp => {
                    resolve(resp.data)
                })
                .catch((error) => {
                    reject(new Error(`Error when creating a new VMS (MSG: ${error})`))
                })
        })
    },

    newChainFile( file ) {
        console.log('ME LLEGO EL FILE', file);
        if(!file) {
            return Promise.reject(new Error('File not informet'))
        }

        //const formdata = new FormData(document.querySelector(file))        

        return new Promise((resolve, reject) => {
            config.api.post(`/chainFile/`, file)
                .then(resp => {
                    console.log('LLEGO ESTO', resp)
                    resolve(resp.data)
                })
                .catch((error) => {
                    console.log('LLEGO ESTO ERR', error)
                    //reject(new Error(`Error when creating a new VMS (MSG: ${error})`))
                    reject(error.data)
                })
        })
    },

    updateChain( chain ) {
        if(!chain) {
            return Promise.reject(new Error('Data not informed'))
        }

        return new Promise((resolve, reject) => {
            config.api.put(`/chain/${chain.id}`, chain)
                .then(resp => {
                    resolve(resp.data)
                })
                .catch(error => {
                    reject(new Error(`Error when creating a new VMS ${error}`))
                })
        })
    },

    removeChain( chainId ) {
        if(!chainId) {
            return Promise.reject(new Error('Data not informed'))
        }

        return new Promise((resolve, reject) => {
            config.api.delete(`/chain/${chainId}`)
                .then(resp => {
                    resolve(resp.data)
                })
                .catch(error => {
                    reject(new Error(`Error when removing a new vmsType ${error}`))
                })
        })
    },

    getAllChain() {
        return new Promise((resolve, reject) => {
            config.api.get(`/chain/`)
                .then(resp => {
                    console.log('list of service chain', resp);
                    
                    resolve(resp.data)
                })
                .catch(error => {
                    reject(new Error(`Error when removing a new vmsType ${error}`))
                })
        })
    },

    getChain( chainId ) {
        if( !chainId ){
            return Promise.reject(new Error('Data not informed'))
        }

        return new Promise((resolve, reject) => {
            config.api.get(`/chain/${chainId}`)
                .then(resp => {
                    resolve(resp.data)
                })
                .catch(error => {
                    reject(new Error(`Error when removing a new vmsType ${error}`))
                })
        })
    }
}