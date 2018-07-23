import * as express from 'express';
import * as path from 'path';

import * as files from './FilesController';

export let socketRouter = express.Router();

// socketRouter.get('/',(req,res) => {
//     res.sendFile(path.resolve() + '/public/index.html');
// });
socketRouter.get('/', files.sendIndexHtml);

// socketRouter.get('/js/index.js',(req ,res) => {
//     res.sendFile(path.resolve() + '/public/js/index.js');
// });
socketRouter.get('/js/index.js', files.sendIndexJs);

// socketRouter.get('/css/mystyle.css',(req,res) => {
//     res.sendFile(path.resolve() + '/public/css/mystyle.css');
// });
socketRouter.get('/css/mystyle.css', files.sendStyleCss);



// export let myRouter = express.Router();
// myRouter.get('/hello',(req,res) => {
//     res.send("hi");
// });





