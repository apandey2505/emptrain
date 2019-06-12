import ServiceBase from '../base'
const empmodel = require('../../../models').employee_info

console.log("i am in service>>Employee>> employee delete");

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

  async run(xx) {
    try {

      empmodel.destroy({
          where: {
            id: xx
          }
        })
        .then(() => console.log('employee data -- deleted'));
      return "employee deleted from db"

    } catch (error) {

      console.log(error)

      return this.variable
    }
  }
}
