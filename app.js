/*Application Server*/

'use strict';

var express = require('express');
var app = express();
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var appServer = require('./server.js');
var webServer = http.createServer(app);
var port = 4004;

app.use(morgan());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/ui'));

/*app.configure(function() {
    app.use('/js', express.static(__dirname + '/js'));
    app.use('/css', express.static(__dirname + '/css'));
    app.use('/src/img', express.static(__dirname + '/src/img'));
    app.use('/src/views', express.static(__dirname + '/src/views'));
});*/

webServer.listen(port);

app.get('/', function(req, res, next) {
  res.sendfile('client/index.html');
});