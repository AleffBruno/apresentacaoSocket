"use strict";
exports.__esModule = true;
var express = require("express");
var files = require("./FilesController");
exports.socketRouter = express.Router();
// socketRouter.get('/',(req,res) => {
//     res.sendFile(path.resolve() + '/public/index.html');
// });
exports.socketRouter.get('/', files.sendIndexHtml);
// socketRouter.get('/js/index.js',(req ,res) => {
//     res.sendFile(path.resolve() + '/public/js/index.js');
// });
exports.socketRouter.get('/js/index.js', files.sendIndexJs);
// socketRouter.get('/css/mystyle.css',(req,res) => {
//     res.sendFile(path.resolve() + '/public/css/mystyle.css');
// });
exports.socketRouter.get('/css/mystyle.css', files.sendStyleCss);
// export let myRouter = express.Router();
// myRouter.get('/hello',(req,res) => {
//     res.send("hi");
// });
