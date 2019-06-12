import Responder from '../../../server/expressResponder'
import Service_task_insert from '../../services/tasks/taskInsert'
import taskgetidService from '../../services/tasks/taskGetId'

export default class employee {

  static async Insert(req, res) {
    const variable = req.body
    console.log(variable, "pppp")
    console.log(variable.task_name)
    const taskInsertResult = await Service_task_insert.execute(variable.task_name)
    console.log(" app >>controler>> task>")
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&")
    console.log(taskInsertResult);
    //const getidres = await employeegetidService.execute();


    if (taskInsertResult.successful) {
      console.log(taskInsertResult, '0000000000000000000000000000000');
      let result = taskInsertResult._result;
      console.log(result, "99999999999")
      Responder.success(res, {
        result
      })
      //res.send("this is your employeeInfo" + sampleServiceResult );
    } else {
      Responder.operationFailed(res, taskInsertResult.error)
    }
  }
}
