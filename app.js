/*Application Server*/

'use strict';

var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var appServer = require('./server.js');
var webServer = http.createServer(app);
var port = 4004;

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use('/ui', express.static(path.join(__dirname + '/client/ui')));
app.use('/lib', express.static(path.join(__dirname + '/node_modules')));

//CARD: https://api.magicthegathering.io/v1/cards/<MultiverseId>

webServer.listen(port);

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/client', 'index.html'));
});