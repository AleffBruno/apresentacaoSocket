import * as socket from 'socket.io';


export function socketBehavior (httpServer) : void {
    let io = socket(httpServer);

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
}