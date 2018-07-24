"use strict";
exports.__esModule = true;
var express = require("express");
//import * as path from 'path';
var filesController = require("./FilesController");
exports.fileRouter = express.Router();
// socketRouter.get('/',(req,res) => {
//     res.sendFile(path.resolve() + '/public/index.html');
// });
exports.fileRouter.get('/', filesController.sendIndexHtml);
// socketRouter.get('/js/index.js',(req ,res) => {
//     res.sendFile(path.resolve() + '/public/js/index.js');
// });
exports.fileRouter.get('/js/index.js', filesController.sendIndexJs);
// socketRouter.get('/css/mystyle.css',(req,res) => {
//     res.sendFile(path.resolve() + '/public/css/mystyle.css');
// });
exports.fileRouter.get('/css/mystyle.css', filesController.sendStyleCss);
// export let myRouter = express.Router();
// myRouter.get('/hello',(req,res) => {
//     res.send("hi");
// });
