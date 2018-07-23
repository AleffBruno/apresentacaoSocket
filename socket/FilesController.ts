import * as path from 'path';

export function sendIndexHtml(req,res){
    res.sendFile(path.resolve() + '/public/index.html');
};

export function sendIndexJs(req,res){
    res.sendFile(path.resolve() + '/public/js/index.js');
};

export function sendStyleCss(req,res){
    res.sendFile(path.resolve() + '/public/css/mystyle.css');
};