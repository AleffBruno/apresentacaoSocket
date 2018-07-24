"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
// import * as socket from 'socket.io';
var FilesRouter_1 = require("./components/files/FilesRouter");
var SocketServer_1 = require("./components/socket/SocketServer");
var app = express();
var myHttp = new http.Server(app);
// let io = socket(myHttp);
SocketServer_1.socketBehavior(myHttp);
app.use('/', FilesRouter_1.fileRouter);
// io.on('connection',function(socket){
//     console.log("nova conexao");
//     //socket.broadcast.emit('[NOME_DO_EVENTO]'); ---- envia uma msg pata todos do client exeto para eu mesmo
//     socket.broadcast.emit('broadcast','broadcast_enviado');
//     //io.emit('[NOME_EVENTO]','[PAYLOAD]') ---- envia um evento para o client
//     io.emit('io.emit', "io.emit_AQUI"); 
//     //socket.on('[NOME_DO_EVENTO]',function(arg){}) ---- fica "escutando" o acontecer de um evento
//     socket.on('chat message', function(msg){
//         io.emit('chat message', msg);
//     });
// });
myHttp.listen(3000, function () {
    console.log(" port 3000");
});
