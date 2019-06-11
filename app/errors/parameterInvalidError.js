import BaseError from './baseError'

class ParameterInvalidError extends BaseError {
  constructor (message) {
    super(message, 404)
  }
}
console.log("i am in app>>errors>> paramter");

export default ParameterInvalidError
