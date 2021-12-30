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

module.exports = app;