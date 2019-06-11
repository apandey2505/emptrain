var express = require('express');
var router = express.router;

import employeeInfo from '../app/controllers/employee/employeeInfo'
import employeeInsert from '../app/controllers/employee/employeeInsert'




// var employee = require('../routes/Routes_for_life/employee')
// var task_req = require('../app/controllers/takscontroller')

const initRoutes = (app) => {

  console.log(" I am in route >> index");
  app.use('/emp', (req,res)=> { res.send(" hi , EMP  ")});
  app.use('/home', (req,res)=> { res.send(" hi , this is the home page ")});
 
  app.use('/employee/info', employeeInfo.Info )
  app.use('/employee/insert',employeeInsert.Insert)
  
}

console.log("**index**-------------------");

export default initRoutes
 