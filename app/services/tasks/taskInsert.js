import ServiceBase from '../base'

const taskmodel = require('../../../models').tasks

console.log("i am in servic>> task >>task insert");

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
      taskmodel.create({
          task_name: this.args.task_name,

        })
        .then(() => console.log('task data -- inserted'));
      return this.args

    } catch (error) {

      console.log(error)

      return this.variable
    }
  }
}
