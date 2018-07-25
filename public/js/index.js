$(function () {
    //inicializa o socket do lado do client
    var socket = io();

    $('input').keyup(function (e){
        //EMITIR EVENTO AQUI E VER OQUE ACONTECE QUANDO NAO RETURN FALSE
    });

    $('form').submit(function(){ 
        //socket.emit('[NOME_DO_EVENTO]','[PAYLOAD]') ---- envia um evento para o server

        //pega o valor do input de mensagem e emite um evento chamado 'chat message'
        socket.emit('chat message', $('#m').val());

        //limpa o input de mensagem
        $('#m').val('');
        return false;
    });

    //socket.on('[NOME_DO_EVENTO]',function(arg){}) ---- fica "escutando" o acontecer de um evento
    socket.on('io.emit',function(msg){
        console.log(msg);
    });

    socket.on('broadcast',function(msg){
        console.log(msg);
    });

    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
    });

});