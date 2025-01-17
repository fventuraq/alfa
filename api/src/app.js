const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./db/connect');

const router = express.Router();

//Rotas
const index = require('./routes/index');
const locationRoutes = require('./routes/locationRoutes');
const deviceRoutes   = require('./routes/deviceRoutes');
const vmsTypeRoutes  = require('./routes/vmsTypeRoutes');
const vmsRoutes      = require('./routes/vmsRoutes');
const networkRoutes = require('./routes/networkRoutes');
const chainRoutes = require('./routes/chainRoutes');
const chainFileRoutes = require('./routes/chainFileRoutes');
const nodesRoutes    = require('./routes/nodeRoutes');
const maestroRoutes    = require('./routes/maestroRoutes');
const configurationRoutes    = require('./routes/configurationRoutes');

// Plugins Routes
const melindaRoutes    = require('./routes/melindaRoutes');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

const cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
}

/*

app.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

*/

app.use(cors(corsOptions));

app.use('/location', locationRoutes);

app.use('/device', deviceRoutes);

app.use('/vmsType', vmsTypeRoutes);

app.use('/vms', vmsRoutes);

app.use('/node', nodesRoutes);

app.use('/maestro', maestroRoutes);

app.use('/configuration', configurationRoutes);

app.use('/plugins/melinda', melindaRoutes);

app.use('/', index);

app.use('/network', networkRoutes);

app.use('/chain', chainRoutes);

app.use('/chainFile', chainFileRoutes);

module.exports = app;