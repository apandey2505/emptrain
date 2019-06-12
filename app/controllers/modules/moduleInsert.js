import Responder from '../../../server/expressResponder'
import Service_module_insert from '../../services/modules/moduleInsert'
import modulegetidService from '../../services/tasks/taskGetId'

export default class employee {

  static async Insert(req, res) {
    const variable = req.body
    console.log(variable, "pppp")
    console.log(variable.task_name)
    const moduleInsertResult = await Service_module_insert.execute(variable)
    console.log(" app >>controler>> task>")
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&")
    console.log(moduleInsertResult);
    //const getidres = await employeegetidService.execute();


    if (moduleInsertResult.successful) {
      console.log(moduleInsertResult, '0000000000000000000000000000000');
      let result = moduleInsertResult._result;
      console.log(result, "99999999999")
      Responder.success(res, {
        result
      })
      //res.send("this is your employeeInfo" + sampleServiceResult );
    } else {
      Responder.operationFailed(res, moduleInsertResult.error)
    }
  }
}
