import Responder from '../../../server/expressResponder'
import Service_module_getdetails from '../../services/modules/moduleGetDetails'
//import modulegetidService from '../../services/tasks/taskGetId'

export default class employee {

  static async GetDetails(req, res) {
    const variable = req.body
    console.log(variable, "qqqqqq")
    console.log(variable.module_name)
    const moduleGetDetailsResult = await Service_module_getdetails.execute(variable)
    console.log(" app >>controler>> task>")
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&")
    console.log(moduleGetDetailsResult);
    //const getidres = await employeegetidService.execute();


    if (moduleGetDetailsResult.successful) {
      console.log(moduleGetDetailsResult, '0000000000000000000000000000000');
      let result = moduleGetDetailsResult._result;
      console.log(result, "99999999999")
      Responder.success(res, {
        result
      })
      //res.send("this is your employeeInfo" + sampleServiceResult );
    } else {
      Responder.operationFailed(res, moduleGetDetailsResult.error)
    }
  }
}
