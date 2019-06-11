import Responder from '../../../server/expressResponder'
import Service_employee_insert from '../../services/employee/employeeInsert'

export default class employee {

  static async Insert(req, res) {
    const variable = req.body
    console.log(variable, "pppp")
    const employeeInsertResult = await Service_employee_insert.execute(variable)
    console.log(" app >>controler>> employee>")
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
