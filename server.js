//TODO: HANDLES LOBBY COMMUNICATION & USER MANAGEMENT + SPAWNING OF GAMES AS CHILD_PROCESSES

'use strict';

var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Server = function() {

  var io = require('socket.io');
  var sio = null;
  var request = require('request');
  //var dbMgr = require('./dbmgr.js').getInstance();

  var imgHandlerURL = "http://gatherer.wizards.com/Handlers/Image.ashx";
  var cardDetailsURL = "http://gatherer.wizards.com/Pages/Card/Details.aspx";
  var connections = [];


  console.log("WebServer INIT");
  /*function getImageURLByCardName(cardName) {
    var cn = encodeURIComponent(cardName);
    cn += "&type=card";
    return imgHandlerURL + "?name=" + cn;
  }
  function getInfoURLByCardName(cardName) {
    var cn = encodeURIComponent(cardName);
    return cardDetailsURL + "?name=" + cn;
  }
  function getImageURLByCardID(multiverseID) {
    return imgHandlerURL + "?multiverseid=" + multiverseID;
  }
  function getInfoURLByCardID(multiverseID) {
    return cardDetailsURL + "?multiverseid=" + multiverseID;
  }


  function fetchCardImage(cardId, url) {
    console.log("SERVER: Perfroming search for card URL: "+url);
    //TODO: If THIS REQUEST IS NOT CACHEABLE, MAKE IT SO
    request({
      url: url,
      followRedirect: false,
      encoding : 'binary',
      }, function(err, res, body) {
        //console.log("CARD SEARCH RESULT: ");
        //console.log(res);
        if(err) {
          console.log("AN ERROR OCCURED: "+err);
        }
        else {
          var imgStr = new Buffer(body,'binary').toString('base64');
          var cardData = {id:cardId, imgData:imgStr};
          for(var i=0; i<connections.length; i++) {
            connections[i].emit('searchResultImage',JSON.stringify(cardData));
          }
        }
        //console.log("BODY:");
        //console.log(body);
     }
    );
  }*/

  /*function fetchCardInfo(url) {
    console.log("SERVER: Perfroming search for card info URL: "+url);
    request({
      url: url,
      followRedirect: false,
      headers: { 'Content-Type': 'application/json' }
      }, function(err, res, body) {
        if(err) {
          console.log("AN ERROR OCCURED: "+err);
        }
        else {
          //TODO: TRY THIS FOR PARSING: https://www.npmjs.org/package/htmlparser
          var jb = JSON.parse(body);
          console.log("CARD SEARCH RESULT: ");
          console.log(jb);
        }*/
        /*else {
          var imgStr = new Buffer(body,'binary').toString('base64');
          var cardData = {id:cardId, imgData:imgStr};
          for(var i=0; i<connections.length; i++) {
            connections[i].emit('searchResultImage',JSON.stringify(cardData));
          }
        }*/
     /*}
    );
  }*/

  //EVENTS FROM SERVER TO CERTAIN CLIENT:
  //-

  //EVENTS FROM SERVER TO ALL CLIENTS:
  //-user: connected, disconnected, message, (status? idle/ingame/etc...)
  //-server: started, stopped

  /*this.stop = function() {
    console.log("SERVER: Stopped by request.");
    sio.sockects.emit('')
    this.emit('stopped');
  }
  this.start = function(webServer) {
    console.log(">>>>>>>>>>>SERVER START");
    if(webServer) {
      sio = io.listen(webServer);
      sio.sockets.on('connection', function(socket) {
        connections.push(socket);
        socket.emit('connected', { msg: 'HI, YOURE CONNEḰTED TO APPSERVER.' });
        sio.sockects.emit('user', { msg: 'NEW USER CONNECTED, COUNT='+connections.length });
        socket.on('searchRequest', function(data) {
          var imgUrl = "";
          var infoUrl = "";
          if(data.card.name!=undefined) {
            console.log("SEARCH_REQUEST FROM CLIENT BY NAME: cardName="+data.card.name);
            imgUrl = getImageURLByCardName(data.card.name);
            infoUrl = getInfoURLByCardName(data.card.name);
          }
          if(data.card.url!=undefined) {
            console.log("SEARCH_REQUEST FROM CLIENT BY URL: url="+data.card.url);
            imgUrl = data.card.url;
            var idParam = "multiverseid=";
            var cardID = data.card.url.substring(data.card.url.lastIndexOf(idParam)+idParam.length,data.card.url.indexOf("&"));
            console.log("CARD ID="+cardID);
            infoUrl = getInfoURLByCardID(cardID);
            console.log("IMAGURL: "+imgUrl);
          }
          console.log("INPHO_URL:"+infoUrl);
          fetchCardImage(cardID, imgUrl);
          fetchCardInfo(infoUrl);
        });
        socket.on('disconnect', function() {

        });
	      console.log("CLIENT SOCKET CONNEKTED. current amount="+connections.length);
      });
      this.emit('started');
    }
    else {
      var msg = "SERVER: Cannot start socket-io: webServer is not defined";
      console.log(msg);
      this.emit('error', msg);
    }
  }*/

};
util.inherits(Server, EventEmitter);
module.exports = new Server();