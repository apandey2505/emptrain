var express = require('express');
var router = express.Router();


import Responder from '../../../server/expressResponder'

import employeeUpdate from '../../services/employee/employeeUpdate'

// you need to give id(thats need to be changed) , emp_name(new name), emp_emailid(new email id ) 
export default class employee {

  static async Update(req, res) {
    const variable = req.body
    // let name = req.body.emp_name
    // let emailid = req.body.emp_emailid

    console.log("++++++++++")
    console.log(variable);

    let employeeUpdate_res = await employeeUpdate.execute(variable)


    if (employeeUpdate_res.successful) {

      let result = "data updated successfuly"

      Responder.success(res, {
        result
      })
      //res.send("this is your employeeInfo" + sampleServiceResult );
    } else {
      Responder.operationFailed(res, employeeUpdate_res.error)
    }
  }
}
