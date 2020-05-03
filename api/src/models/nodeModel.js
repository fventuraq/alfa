var mongoose = require('mongoose');

var Schema   = mongoose.Schema;

var nodesSchema = new Schema({
    'name' : String,
    'ip' : String,
    'description' : String,
    'dockerId' : String,
    'isMaster' : {
      type: Boolean,
      default: false
    },
    'online' : {
      type: Boolean,
      default: false
    },
    'images' : []
},{
  timestamps: true
});

module.exports = mongoose.model('node', nodesSchema);
