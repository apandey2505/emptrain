import Responder from './expressResponder'
import * as express from './express'
import logger from './logger'
import start from './app'

//var xx = require('../app/controllers/StudentInfo_controller');

const app = { start }
console.log("i am in server>>index");
//console.log(req.body);

//app.use(xx.StudentInfo_controller_function(1 ,'abhi','apandey@techracre.io'));


export { Responder, express, logger, app }
