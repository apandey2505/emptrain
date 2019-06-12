import ServiceBase from '../base'
const taskmodel = require('../../../models').tasks

console.log("i am in service>> task >> task get Id");

const constraints = {
  variable: {
    presence: {
      allowEmpty: false
    }
  }
}

export default class Info extends ServiceBase {
  get constraints() {
    return constraints
  }



  async run(x) {
    try {
      let xx = await functiongetid(x)
      console.log(xx);
      console.log("in findall")
      async function functiongetid(a) {
        return await taskmodel.findAll({
            attributes: ['id'],
            where: {
              task_name: a

            }
          })
          .then(async (task) => {
            console.log(task)
            var ret_id = task[0].id;
            console.log(">>>>>>>>//////////>>>>>>>>>>")
            console.log(ret_id);
            return ret_id
          })
      }

      //console.log("......................");
      //console.log(xx);
      return xx;

    } catch (error) {

      console.log(error)

      return "error";

    }
  }
}
