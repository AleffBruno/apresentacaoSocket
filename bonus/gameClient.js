
var velocidadeDeMovimento = 10;
var player;
var namePlayer;
var positionTopGlobal = 0;
var positionLeftGlobal = 0;
var socket;

$(function() {
    socket = io();

    

    $( "#myForm" ).submit(function( event ) {
        namePlayer = $('#inputName').val();
        data = {
            name : namePlayer,
            top : positionTopGlobal,
            left : positionLeftGlobal
        }
        socket.emit('newPlayerConnected',data);
        $( "#myForm" ).hide();

        $('body').append(
            '<div id="'+namePlayer+'" class="myDiv" style="background-color:lightblue; height: 50px;width: 50px;"></div>'
        );

        player = $( "#"+namePlayer );
        $(player).css({top: positionTopGlobal , left: positionLeftGlobal, position:'absolute'});

        event.preventDefault();
    });


    // socket.on('newPlayerConnected',function(newPlayer){
    //     if(newPlayer.name != namePlayer){
    //         $('body').append(
    //             '<div id="'+newPlayer.name+'" class="myDiv" style="position: absolute;background-color:lightblue; height: 50px;width: 50px;left:'+newPlayer.left+'px; top:'+newPlayer.top+'px;"></div>'
    //         );
    //     }
    // });

    socket.on('showPlayersOnline',function(playersOnline){
        console.log(playersOnline);
        playersOnline.forEach(function(item,index){
            if(item.name != namePlayer) {
                $('body').append(
                    '<div id="'+item.name+'" class="myDiv" style="position: absolute;background-color:lightblue; height: 50px;width: 50px;left:'+item.left+'px; top:'+item.top+'px;"></div>'
                );
            }
            
        });

    }); 


    socket.on('updatePositionPLayer',function(data){
        data.forEach(function(item,index){
            if(item.name != namePlayer) {
                //desapensa do body e dps apenda novamente
                $('body').children("div#"+item.name).remove();
                $('body').append(
                    '<div id="'+item.name+'" class="myDiv" style="position: absolute;background-color:lightblue; height: 50px;width: 50px;left:'+item.left+'px; top:'+item.top+'px;"></div>'
                );
            }
            
        });
        //console.log(data);
    });


    movimento();
    

});

function emitAlguemMoveu() {
    data = {
        name : namePlayer,
        top : positionTopGlobal,
        left : positionLeftGlobal
    }
    socket.emit('someoneMoved',data);
}

function movimento() {
    $('body').keydown(function (e){
        var positionTop = player.position().top;
        var positionLeft = player.position().left

        emitAlguemMoveu();
        //a
        if (e.keyCode == 65) {
            newPosition = positionLeft-velocidadeDeMovimento;
            $(player).css({left:newPosition});
            positionLeftGlobal = newPosition;
        }

        //d
        if (e.keyCode == 68) {
            newPosition = positionLeft+velocidadeDeMovimento;
            $(player).css({left:newPosition});
            positionLeftGlobal = newPosition;
        }

        //w
        if (e.keyCode == 87) {
            newPosition = positionTop-velocidadeDeMovimento;
            $(player).css({top:newPosition});
            positionTopGlobal = newPosition;
        }

        //s
        if (e.keyCode == 83) {
            newPosition = positionTop+velocidadeDeMovimento;
            $(player).css({top:positionTop+velocidadeDeMovimento});
            positionTopGlobal = newPosition;
        }
    })
}

