import ServiceBase from '../base'
const empmodel = require('../../../models').employee_info

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



  async run(x, y) {
    try {
      let xx = await functiongetid(x, y)
      console.log(xx);
      console.log("in findall")
      async function functiongetid(a, b) {
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


//   async run() {
//     try {
//       let ret_id = await idfucntion();
//       async function idfucntion() {
//         await empmodel.findAll({
//             attributes: ['id'],
//             where: {
//               empName: "roy"
//             }
//           })
//           .then(async (emp) => {
//             returnval = emp[0].id;
//             return returnval
//           })
//       }
//       return returnval
//     } catch (error) {

//       // handle error case

//       return this.variable
//     }
//   }
// }
