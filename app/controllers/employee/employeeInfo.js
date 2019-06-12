var express = require('express');
var router = express.Router();
//const insert_require = require('../../insert/EmpInfo_insert')
console.log("controller>> empinfo")

// router.use('/', async(req, res, next) => {
//   const req_we_got = req.body;
//   let object = await insert_require.insertEmpInfoFunction(req_we_got);

//   res.send(object);

//   console.log("----------*****************************---------------");

// });

// module.exports = router;

import Responder from '../../../server/expressResponder'
import employeeinfoService from '../../services/employee/employeeInfo'


export default class employee {

  static async Info(req, res) {
    const variable = req.body
    //console.log(variable,"ghghghghghghgh")
    const employeeinfoResult = await employeeinfoService.execute(variable)

    console.log(" app >>controler>> employee>")

    if (employeeinfoResult.successful) {
      console.log(employeeinfoResult, '0000000000000000000000000000000');
      let result = employeeinfoResult._result;
      console.log("=====")
      console.log(result, "99999999999")
      Responder.success(res, {
        result
      })
      //res.send("this is your employeeInfo" + employeeinfoResult );
    } else {
      Responder.operationFailed(res, employeeinfoResult.error)
    }
  }
}
