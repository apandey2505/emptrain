var express = require('express');
var router = express.router;

import employeeInfo from '../app/controllers/employee/employeeInfo'
import employeeInsert from '../app/controllers/employee/employeeInsert'
import employeeDelete from '../app/controllers/employee/employeeDelete'
import employeeUpdate from '../app/controllers/employee/employeeUpdate'

// import employeeInfo from '../app/controllers/employee/employeeInfo'
import taskInsert from '../app/controllers/tasks/taskInsert'
import taskDelete from '../app/controllers/tasks/taskDelete'
import taskUpdate from '../app/controllers/tasks/taskUpdate'

//modules
import modulesInsert from '../app/controllers/modules/moduleInsert'
import modulesGetId from '../app/controllers/modules/moduleGetId'
import modulesGetDetails from '../app/controllers/modules/moduleGetDetails'







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

  //employee

  app.use('/employee/info', employeeInfo.Info)
  app.use('/employee/insert', employeeInsert.Insert)
  app.use('/employee/delete', employeeDelete.Delete)
  app.use('/employee/update', employeeUpdate.Update)

  //tasks
  app.use('/tasks/insert', taskInsert.Insert)
  app.use('/tasks/delete', taskDelete.Delete)
  app.use('/tasks/update', taskUpdate.Update)

  //modules
  app.use('/modules/insert', modulesInsert.Insert)
  app.use('/modules/get/id', modulesGetId.GetId)
  app.use('/modules/get/details', modulesGetDetails.GetDetails)


}

export default initRoutes
