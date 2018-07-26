import * as path from 'path';

import { Request , Response } from 'express';

export function sendIndexHtml(req : Request ,res : Response){
    res.sendFile(path.resolve() + '/public/index.html');
};

export function sendIndexJs(req : Request ,res : Response){
    res.sendFile(path.resolve() + '/public/js/index.js');
};

export function sendStyleCss(req : Request ,res : Response){
    res.sendFile(path.resolve() + '/public/css/mystyle.css');
};