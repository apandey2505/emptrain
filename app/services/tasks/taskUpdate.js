import ServiceBase from '../base'
const taskmodel = require('../../../models').tasks
//import employeegetid from '../../services/employee/employeeGetId'



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


      taskmodel.update({
            task_name: this._args.task_name,

          }, {
            where: {
              id: this._args.id
            }
          }

        )
        .then(() => console.log('task data -- updated'));
      return this.args

    } catch (error) {

      console.log(error)

      return this.variable
    }
  }
}
