import ServiceBase from '../base'
const model_of_module = require('../../../models').module

console.log("i am in service>> module >> module get Id");

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
      let name = this._args.module_name;
      console.log("########")
      console.log(name);
      let xx = await functiongetid(name)
      console.log("%%%%%%%%%%%%%%%%%%%%%%%")
      console.log(xx);
      console.log("in findall")

      async function functiongetid(a) {
        return await model_of_module.findAll({
            attributes: ['id'],
            where: {
              module_name: a

            }
          })
          .then((resultid) => {
            console.log(resultid)
            var ret_id = resultid[0].id;
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
