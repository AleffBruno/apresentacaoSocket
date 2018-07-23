"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
exports.socketRouter = express.Router();
exports.socketRouter.get('/', function (req, res) {
    res.sendFile(path.resolve() + '/public/index.html');
});
exports.socketRouter.get('/js/index.js', function (req, res) {
    res.sendFile(path.resolve() + '/public/js/index.js');
});
exports.socketRouter.get('/css/mystyle.css', function (req, res) {
    res.sendFile(path.resolve() + '/public/css/mystyle.css');
});
// export let myRouter = express.Router();
// myRouter.get('/hello',(req,res) => {
//     res.send("hi");
// });
