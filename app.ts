import * as express from 'express';
import * as http from 'http';
import * as socket from 'socket.io';

let app = express();
let myHttp = new http.Server(app);
let io = socket(myHttp);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
    console.log('a user connected');
});

myHttp.listen(3000,function(){
    console.log(" port 3000");
});
  
  