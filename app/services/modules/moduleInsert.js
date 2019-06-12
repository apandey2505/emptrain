import ServiceBase from '../base'

const module_model = require('../../../models').module

console.log("i am in servic>> module >> module insert");

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
      console.log("@@@@ ------------insert")
      console.log(this.args)
      module_model.create({
          module_name: this.args.module_name,
          task_id: this.args.task_id

        })
        .then(() => console.log('module data -- inserted'));
      return this.args

    } catch (error) {

      console.log(error)

      return this.variable
    }
  }
}
