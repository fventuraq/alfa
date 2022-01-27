import { config } from '../../config'

export const apiNetwork = {
    newNetwork ( network ) {
        console.log('entre a newNetwork');
        console.log('los datos enviado desde el formulario son: ', network);
        if( !network ) {
            return Promise.reject( new Error('Data not informed'))
        }
        return new Promise((resolve, reject) => {
            config.api.post(`/network`, network)
                .then(resp => {
                    console.log('resp:', resp);
                    resolve( resp.data )
                })
                .catch((error) => {
                    console.log('error:', error);
                    reject(new Error(`Error when creating a new NETWORK (MSG: ${error})`))
                })
        })
    },
    getAllNetwork () {
        return new Promise((resolve, reject) => {
            config.api.get(`/network/`)
                .then(resp => {
                    resolve(resp.data)
                })
                .catch( e => {
                    reject(e)
                })
        })

    },
    getNetwork( networkId ) {
        return new Promise((resolve, reject) => {
            config.api.get(`/network/${networkId}`)
                .then(resp => {
                    resolve(resp.data)
                })
                .catch(e => {
                    reject(e)
                })
        })
    },
    getNetworkToSelect() {
        return new Promise((resolve, reject) => {
            config.api.get('/network/')
                .then(resp => {
                    let networks = []
                    resp.data.forEach(network => {
                        networks.push({
                            text: network.name,
                            value: network._id
                        })
                    })
                    resolve(networks)
                })
                .catch(e => {
                    reject(e)
                })
        })
    },    
    updateNetwork ( network ) {
        if(!network){
            return Promise.reject(new Error('Data not informed'))
        }
        return new Promise((resolve, reject) => {
            config.api.put(`/network/${network.id}`, network)
                .then(resp => {
                    resolve(resp.data)
                })
                .catch((e) => {
                    reject(new Error(`Error when update a NETWORK ${e}`))
                })
        })
    },
    removeNetwork( networkId ) {
        if(!networkId) {
            return Promise.reject(new Error('Data not informed'))
        }
        return new Promise((resolve, reject) => {
            config.api.delete(`/network/${networkId}`)
                .then(resp => {
                    resolve(resp.data)
                })
                .catch(e => {
                    reject(new Error(`Error when removing a NETWORK ${e}`))
                })
        })
    },
    startNetwork( network ) {
        if(!network) {
            return Promise.reject( new Error('Data not informed'))
        }
        return new Promise((resolve, reject) => {
            config.api.get(`/network/start/${network.networkId}`)
                .then( resp => {
                    resolve(resp.data)
                })
                .catch( e => {
                    reject(new Error(`Error when starting a NETWORK ${e}`))
                })
        })
    },
    stopNetwork( network ) {
        if(!network){
            return Promise.reject(new Error('Data not informed'))
        }
        return new Promise((resolve, reject) => {
            config.api.get(`/network/${network.dockerId}`)
                .then(resp => {
                    resolve(resp.data)
                })
                .catch(e => {
                    reject(new Error(`Error when stopping the NETWORK ${e}`))
                })
        })
    }
}