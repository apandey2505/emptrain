import ServiceBase from '../base'
const empmodel = require('../../../models').employee_info

console.log("i am in service>>Employee>> employee insert");

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
      console.log("@@@****************@@@@@@")
      console.log(this.args.emp_name)
      empmodel.create({
          emp_name: this._args.emp_name,
          emp_emailid: this._args.emp_emailid
        })
        .then(() => console.log('employee data -- inserted'));
      return this.args

    } catch (error) {

      console.log(error)

      return this.variable
    }
  }
}






// import ServiceBase from '../base'
// const model = require('../../../models/EmpInfo_model')

// console.log("i am in service>>Employee>> employee insert");

// const constraints = {
//   variable: {
//     presence: { allowEmpty: false }
//   }
// }

// export default class Info extends ServiceBase {
//   get constraints () {
//     return constraints
//   }

//   async run () {
//     try {

//       return this.args

//     } catch (error) {

//       // handle error case

//       return this.variable
//     }
//   }
// }
