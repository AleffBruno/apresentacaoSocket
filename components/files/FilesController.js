"use strict";
exports.__esModule = true;
var path = require("path");
function sendIndexHtml(req, res) {
    res.sendFile(path.resolve() + '/public/index.html');
}
exports.sendIndexHtml = sendIndexHtml;
;
function sendIndexJs(req, res) {
    res.sendFile(path.resolve() + '/public/js/index.js');
}
exports.sendIndexJs = sendIndexJs;
;
function sendStyleCss(req, res) {
    res.sendFile(path.resolve() + '/public/css/mystyle.css');
}
exports.sendStyleCss = sendStyleCss;
;
