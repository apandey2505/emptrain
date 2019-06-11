import ServiceBase from '../base'
//const model = require('../../../models/EmpInfo_model')

console.log("i am in service>>Employee>> employee insert");

const constraints = {
  variable: {
    presence: { allowEmpty: false }
  }
}

export default class Info extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    try {
        
      return this.args

    } catch (error) {

      // handle error case
      
      return this.variable
    }
  }
}
