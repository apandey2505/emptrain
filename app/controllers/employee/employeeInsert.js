import Responder from '../../../server/expressResponder'
import Service_employee_insert from '../../services/employee/employeeInsert'
import employeegetidService from '../../services/employee/employeeGetId'

export default class employee {

  static async Insert(req, res) {
    const variable = req.body
    console.log(variable, "pppp")
    const employeeInsertResult = await Service_employee_insert.execute(variable)
    console.log(" app >>controler>> employee>")
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&")
    console.log(employeeInsertResult);
    //const getidres = await employeegetidService.execute();


    if (employeeInsertResult.successful) {
      console.log(employeeInsertResult, '0000000000000000000000000000000');
      let result = employeeInsertResult._result;
      console.log(result, "99999999999")
      Responder.success(res, {
        result
      })
      //res.send("this is your employeeInfo" + sampleServiceResult );
    } else {
      Responder.operationFailed(res, employeeInsertResult.error)
    }
  }
}
