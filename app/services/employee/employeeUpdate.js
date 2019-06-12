import ServiceBase from '../base'
const empmodel = require('../../../models').employee_info
import employeegetid from '../../services/employee/employeeGetId'



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


      empmodel.update({
            emp_name: this._args.emp_name,
            emp_emailid: this._args.emp_emailid
          }, {
            where: {
              id: this._args.id
            }
          }

        )
        .then(() => console.log('employee data -- updated'));
      return this.args

    } catch (error) {

      console.log(error)

      return this.variable
    }
  }
}
