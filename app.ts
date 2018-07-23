import * as express from 'express';
import * as http from 'http';
import * as socket from 'socket.io';

import { socketRouter } from './routers/socket/RouterSocket';
                                

let app = express();
let myHttp = new http.Server(app);
let io = socket(myHttp);


app.use('/',socketRouter);

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/public/index.html');
// });

// app.get('/js/index.js', function(req, res){
//     res.sendFile(__dirname + '/public/js/index.js');
// });

// app.get('/css/mystyle.css', function(req, res){
//     res.sendFile(__dirname + '/public/css/mystyle.css');
// });

io.on('connection',function(socket){
    console.log("nova conexao");

    //socket.broadcast.emit('[NOME_DO_EVENTO]'); ---- envia uma msg pata todos do client exeto para eu mesmo
    socket.broadcast.emit('broadcast','broadcast_enviado');

    //io.emit('[NOME_EVENTO]','[PAYLOAD]') ---- envia um evento para o client
    io.emit('io.emit', "io.emit_AQUI"); 

    //socket.on('[NOME_DO_EVENTO]',function(arg){}) ---- fica "escutando" o acontecer de um evento
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

});

myHttp.listen(3000,function(){
    console.log(" port 3000");
});
  
  