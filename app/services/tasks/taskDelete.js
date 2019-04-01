import ServiceBase from '../base'
const taskmodel = require('../../../models').tasks


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



  async run() {
    try {

      console.log("--%%%%%%%%%%%")
      // console.log(this.args)
      // console.log(this.args.emp_name)
      let task_name = this.args.task_name


      console.log("-----------")
      console.log(task_name);

      let status_of_del = await functiondirectdelete(task_name)
      console.log(status_of_del);
      console.log("in findall")
      async function functiondirectdelete(a) {
        return await taskmodel.findAll({
            attributes: ['id'],
            where: {
              task_name: a

            }
          })
          .then(async (task) => {
            console.log(task)
            var ret_id = task[0].id;

            taskmodel.destroy({
                where: {
                  id: ret_id
                }
              })
              .then(() => console.log('task data -- deleted directly by name '));
            return this.args;

          })
      }


      return this.args

    } catch (error) {

      console.log(error)

      return "error";

    }
  }
}
