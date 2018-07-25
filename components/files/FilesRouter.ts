import * as express from 'express';

import * as filesController from './FilesController';

export let fileRouter = express.Router();

fileRouter.get('/', filesController.sendIndexHtml);

fileRouter.get('/js/index.js', filesController.sendIndexJs);

fileRouter.get('/css/mystyle.css', filesController.sendStyleCss);






