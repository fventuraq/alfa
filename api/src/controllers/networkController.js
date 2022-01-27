const networkModel = require("../models/networkModel")
const docker = require("../util/dockerApi")

const networkController = {
    get: (req, res, next) => {
        let id = req.params.id;
        networkModel.findById(id)
            .then(network => {
                return res.status(201).json(network);
            })
            .catch(err => {
                return res.status(422).send(err.errors);
            });
    },

    list: (req, res, next) => {
        console.log('entro a list');
        
        networkModel.find()            
            .then(networks => {
                return res.status(201).json(networks);
            })
            .catch(err => {
                return res.status(422).send(err.errors);
            });
    },

    post: (req, res, next) => {

        const network = new networkModel({
            name: req.body.name,
            subnet: req.body.subnet
        })

        network.save((err, device) => {
            if(err) {
                return res.status(500).json({
                    message: 'Error when creating sub-network',
                    error: err
                });
            }
            return res.status(201).json(network);
        })
    },

    put: (req, res, next) => {
        var id = req.params.id;
        networkModel.findById(id)
        .exec()
        .then((network) => {
            if(!network) {
                return res.status(404).send()
            }

            network.name = req.body.name
            network.description = req.body.description
            network.subnet = req.body.subnet

            network.save(function (err) {
                if(err) {
                    return res.status(500).json({
                        message: 'Error when updating',
                        error: err
                    });
                }
                return res.status(200).json({
                    message: 'Update ready'
                })
            })

        })
    }
}
module.exports = networkController