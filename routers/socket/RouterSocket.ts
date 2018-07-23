import * as express from 'express';
import * as path from 'path';

export let socketRouter = express.Router();

socketRouter.get('/',(req,res) => {
    res.sendFile(path.resolve() + '/public/index.html');
});

socketRouter.get('/js/index.js',(req ,res) => {
    res.sendFile(path.resolve() + '/public/js/index.js');
});

socketRouter.get('/css/mystyle.css',(req,res) => {
    res.sendFile(path.resolve() + '/public/css/mystyle.css');
})



// export let myRouter = express.Router();
// myRouter.get('/hello',(req,res) => {
//     res.send("hi");
// });





