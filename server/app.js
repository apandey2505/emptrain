import config from '../config/app'
import * as express from './express'
import logger from './logger'
import '../app/workers'
console.log("I am in server>> app");

var bodyParser = require('body-parser');

// var db = require('../configure/database')

// db.authenticate()
//   .then(()=>console.log('database connected.....................'))
//   .catch(err=> console.log("error : " + err))



const app = express.init()

// listening on server
var server = app.listen(3000,function() { 
console.log("server is************************************************ running");
  });



//body parsing
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/', require('../routes/index'))