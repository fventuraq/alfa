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
            'virtualMemory':{
                type: Number,
                required: true                
            },
            'virtualCPU':{
                type: Number,
                required: true
            },
            'vnfConfigurableProperties': String
        }
    ]

},{
    timestamps: true
});

module.exports = mongoose.model('chain', chainSchema);