import * as express from 'express';
import * as http from 'http';

import { fileRouter } from './components/files/FilesRouter';

import { socketBehavior } from './components/socket/SocketServer';

let app = express();
let myHttp = new http.Server(app);
socketBehavior(myHttp);


app.use('/',fileRouter);

myHttp.listen(3000,function(){
    console.log(" port 3000");
});
  
  