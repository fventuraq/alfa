var mongoose = require('mongoose');
var networkModel = require('./networkModel');
var deviceModel = require('./deviceModel');
var vmsModel = require('./vmsModel');

var Schema = mongoose.Schema;

var chainSchema = new Schema({
    'name': String,
    'description': String,
    'network': {
        type: Schema.Types.ObjectId,
        ref: 'network',
        require: true
    },
    'devices': [    
        {    
        type: Schema.Types.ObjectId,
        ref: 'device' 
        }
    ],
    'vmss': [
        {           
            type: Schema.Types.ObjectId,
            ref: 'vms'            
        }
    ]

},{
    timestamps: true
});

module.exports = mongoose.model('chain', chainSchema);