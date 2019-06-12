var express = require('express');
var router = express.Router();


import Responder from '../../../server/expressResponder'
//import employeedeleteService from '../../services/employee/employeeDelete'
//import getidtobedeleted from '../employee/employeeGetId'
import employeeDirectDelete from '../../services/employee/employeeDirectDelete'


export default class employee {

  static async Delete(req, res) {
    const variable = req.body
    // let name = req.body.emp_name
    // let emailid = req.body.emp_emailid

    console.log("++++++++++")
    console.log(variable);

    const employeeDirectDelete_res = await employeeDirectDelete.execute(variable)


    if (employeeDirectDelete_res.successful) {

      let result = "data deleted successfuly"

      Responder.success(res, {
        result
      })
      //res.send("this is your employeeInfo" + sampleServiceResult );
    } else {
      Responder.operationFailed(res, employeeDirectDelete_res.error)
    }
  }
}
