"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var socket = require("socket.io");
var app = express();
var myHttp = new http.Server(app);
var io = socket(myHttp);
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
    console.log('a user connected');
});
myHttp.listen(3000, function () {
    console.log(" port 3000");
});
