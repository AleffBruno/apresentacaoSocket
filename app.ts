import * as express from 'express';
import * as http from 'http';
// import * as socket from 'socket.io';

import { fileRouter } from './components/files/FilesRouter';

import { socketBehavior } from './components/socket/SocketServer';

let app = express();
let myHttp = new http.Server(app);
// let io = socket(myHttp);
socketBehavior(myHttp);


app.use('/',fileRouter);


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

myHttp.listen(3000,function(){
    console.log(" port 3000");
});
  
  