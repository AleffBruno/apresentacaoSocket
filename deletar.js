var express = require('express');
var http = require('http');
var socket = require('socket.io');


var app = express();
var myHttp = http.createServer(app);
var mySocket = socket(myHttp);

app.get('/',function(req,res){
    res.sendFile(__dirname+'/deletar.html');
});

var contador = 0;
mySocket.on('connection',function(socket){
    console.log('novaConexao');
});

myHttp.listen(3000);

