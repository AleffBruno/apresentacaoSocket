import * as express from 'express';
//import * as path from 'path';

import * as filesController from './FilesController';

export let fileRouter = express.Router();

// socketRouter.get('/',(req,res) => {
//     res.sendFile(path.resolve() + '/public/index.html');
// });
fileRouter.get('/', filesController.sendIndexHtml);

// socketRouter.get('/js/index.js',(req ,res) => {
//     res.sendFile(path.resolve() + '/public/js/index.js');
// });
fileRouter.get('/js/index.js', filesController.sendIndexJs);

// socketRouter.get('/css/mystyle.css',(req,res) => {
//     res.sendFile(path.resolve() + '/public/css/mystyle.css');
// });
fileRouter.get('/css/mystyle.css', filesController.sendStyleCss);



// export let myRouter = express.Router();
// myRouter.get('/hello',(req,res) => {
//     res.send("hi");
// });





