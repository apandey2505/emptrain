var express = require('express');
var router = express.router;

import employeeInfo from '../app/controllers/employee/employeeInfo'
import employeeInsert from '../app/controllers/employee/employeeInsert'
import employeeDelete from '../app/controllers/employee/employeeDelete'
import employeeUpdate from '../app/controllers/employee/employeeUpdate'




// var employee = require('../routes/Routes_for_life/employee')
// var task_req = require('../app/controllers/takscontroller')

const initRoutes = (app) => {

  console.log(" I am in route >> index");
  app.use('/emp', (req, res) => {
    res.send(" hi , EMP  ")
  });
  app.use('/home', (req, res) => {
    res.send(" hi , this is the home page ")
  });

  app.use('/employee/info', employeeInfo.Info)
  app.use('/employee/insert', employeeInsert.Insert)
  app.use('/employee/delete', employeeDelete.Delete)
  app.use('/employee/update', employeeUpdate.Update)


}

console.log("**index**-------------------");

export default initRoutes
