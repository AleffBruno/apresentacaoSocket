var express = require('express');
var http = require('http');
var socket = require('socket.io');
var _ = require('lodash');

var app = express();
var myHttp = http.createServer(app);
var mySocket = socket(myHttp);

var playersOnline = [];

app.get('/',function(req,res){
    res.sendFile(__dirname+'/game.html');
});

app.get('/gameClient.js',function(req,res){
    res.sendFile(__dirname+'/gameClient.js');
});

mySocket.on('connection',function(socket){
    console.log('novaConexao');

    socket.on('newPlayerConnected',function(newPlayer){
        playerName  = newPlayer.name;
        playersOnline.push(newPlayer);
        //mySocket.emit('newPlayerConnected',newPlayer);
        mySocket.emit('showPlayersOnline',playersOnline);
    });

    socket.on('someoneMoved',function(data){
        mySocket.emit('showPlayersOnline',playersOnline);

        dataName = data.name;
        var whoMove = _.findIndex(playersOnline,{name:dataName});
        var updatePositionPLayer = _.assign(playersOnline[whoMove],data);
        mySocket.emit('updatePositionPLayer',playersOnline);
        
        //console.log(whoMove);
        //mySocket.broadcast.emit('alguemMoveu',data);
    });


});

myHttp.listen(3000);

