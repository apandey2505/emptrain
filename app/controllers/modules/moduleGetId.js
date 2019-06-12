import Responder from '../../../server/expressResponder'
import Service_module_getid from '../../services/modules/moduleGetId'
//import modulegetidService from '../../services/tasks/taskGetId'

export default class employee {

  static async GetId(req, res) {
    const variable = req.body
    console.log(variable, "qqqqqq")
    console.log(variable)
    const moduleGetIdResult = await Service_module_getid.execute(variable)
    console.log(" app >>controler>> task>")
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&")
    console.log(moduleGetIdResult);
    //const getidres = await employeegetidService.execute();


    if (moduleGetIdResult.successful) {
      console.log(moduleGetIdResult, '0000000000000000000000000000000');
      let result = moduleGetIdResult._result;
      console.log(result, "99999999999")
      Responder.success(res, {
        result
      })
      //res.send("this is your employeeInfo" + sampleServiceResult );
    } else {
      Responder.operationFailed(res, moduleGetIdResult.error)
    }
  }
}
