import ServiceBase from '../base'
const empmodel = require('../../../models').employee_info


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
      let name = this.args.emp_name
      let email = this.args.emp_emailid

      console.log("-----------")
      console.log(name);

      let status_of_del = await functiondirectdelete(name, email)
      console.log(status_of_del);
      console.log("in findall")
      async function functiondirectdelete(a, b) {
        return await empmodel.findAll({
            attributes: ['id'],
            where: {
              emp_name: a,
              emp_emailid: b
            }
          })
          .then(async (emp) => {
            console.log(emp)
            var ret_id = emp[0].id;

            empmodel.destroy({
                where: {
                  id: ret_id
                }
              })
              .then(() => console.log('employee data -- deleted directly by name and email'));
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
