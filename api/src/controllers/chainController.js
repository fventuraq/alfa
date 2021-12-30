const chainModel = require("../models/chainModel")
const networkModel = require("../models/networkModel")
const vmsModel = require("../models/vmsModel")
const deviceModel = require("../models/deviceModel")

const chainController = {

    list: (req, res, next) => {
        chainModel.find()
            .then(chains => {
                return res.status(201).json(chains);
            })
            .catch(err => {
                return res.status(422).send(err.errors);
            });
    },

    get: (req, res, next) => {
        let id = req.params.id;
        chainModel.findById(id)
            .then(chain => {
                return res.status(201).json(chain);
            })
            .catch(err => {
                return res.status(422).send(err.errors);
            });
    },

    post: (req, res, next) => {
        const chain = new chainModel({
            name: req.body.name,
            description: req.body.description,
            network: req.body.subnet,
            devices: req.body.devices,
            vmss: req.body.vmss
        })

        chain.save((err, chain) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating service chain',
                    error: err
                });
            }
            return res.status(201).json(chain);
        })
    }
}

module.exports = chainController