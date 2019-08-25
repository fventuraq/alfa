const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const router = express.Router();
const db = require('./db/connect');

//Rotas
const index = require('./routes/index');
const locationRoutes = require('./routes/locationRoutes');
const deviceRoutes = require('./routes/deviceRoutes');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/location', locationRoutes);

app.use('/device', deviceRoutes);

app.use('/', index);

module.exports = app;