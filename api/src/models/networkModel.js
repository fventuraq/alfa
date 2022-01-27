var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var networkSchema = new Schema({     
    'name' : String,
    'subnet' : String, //--subnet=192.168.1.0/24
    'dockerNetworkId' : {
        type: String,
        default: ""
    }
},{
    timestamps: true
});

module.exports = mongoose.model('network', networkSchema);

// docker network create --driver=bridge --subnet=192.168.1.0/24 br0