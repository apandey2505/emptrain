import ServiceBase from '../base'
const module_model = require('../../../models').module
import module_id from '../modules/moduleGetId'

console.log("i am in service>>Employee>> employee get Id");

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
      console.log("^^^^^^^^^^^^")
      console.log(this._args);
      let data = this._args;
      let id_of_module = await module_id.execute(data)
      console.log("~~~~~~~~~~~~~~~")
      let id_we_got = id_of_module._result
      let xx = await functiongetdetails(id_we_got)
      console.log(xx);

      async function functiongetdetails(a) {
        return await module_model.findAll({
            attributes: ['module_name', 'task_id'],
            where: {
              id: a

            }
          })
          .then(async (mod) => {
            console.log(mod)
            var ret_id = mod
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
