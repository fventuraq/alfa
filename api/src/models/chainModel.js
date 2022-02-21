var mongoose = require('mongoose');
var deviceModel = require('./deviceModel')
var vmsModel = require('./vmsModel')

var Schema = mongoose.Schema;

var chainSchema = new Schema({
    'name': String,
    'description': String,
    'devices': [    
        {    
        type: Schema.Types.ObjectId,
        ref: 'device' 
        }
    ],
    'vmss':[
        {
            vms:{
                type: Schema.Types.ObjectId,
                ref: 'vms',
            },
            virtualMemory:{
                'size': Number
            },
            virtualCPU:{
                'numCpu': Number
            },
            vnfConfigurableProperties:{}
        }
    ]

},{
    timestamps: true
});

module.exports = mongoose.model('chain', chainSchema);