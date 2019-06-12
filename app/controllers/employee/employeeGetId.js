import Responder from '../../../server/expressResponder'

import employeegetidService from '../../services/employee/employeeGetId'

export default class employee {

  static async GetId(emp_name, emp_emailid) {
    //const variable = req.body
    //console.log(variable, "pppp")

    const getIdRes = await employeegetidService.execute(emp_name, emp_emailid);

    if (getIdRes.successful) {
      console.log(getIdRes, '0000000000000000000000000000000');
      let result = getIdRes._result;
      console.log(result, "99999999999")
      Responder.success(res, {
        result
      })
      //res.send("this is your employeeInfo" + sampleServiceResult );
    } else {
      Responder.operationFailed(res, getIdRes.error)
    }
  }
}
