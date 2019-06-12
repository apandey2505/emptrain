var express = require('express');
var router = express.Router();


import Responder from '../../../server/expressResponder'
//import employeedeleteService from '../../services/employee/employeeDelete'
//import getidtobedeleted from '../employee/employeeGetId'
import taskDelete from '../../services/tasks/taskDelete'


export default class employee {

  static async Delete(req, res) {
    const variable = req.body
    // let name = req.body.emp_name
    // let emailid = req.body.emp_emailid

    console.log("++++++++++")
    console.log(variable);

    const taskDelete_res = await taskDelete.execute(variable)


    if (taskDelete_res.successful) {

      let result = "task data deleted successfuly"

      Responder.success(res, {
        result
      })
      //res.send("this is your employeeInfo" + sampleServiceResult );
    } else {
      Responder.operationFailed(res, taskDelete_res.error)
    }
  }
}
