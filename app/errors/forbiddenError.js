import BaseError from './baseError'

class ForbiddenError extends BaseError {
  constructor (message) {
    super(message, 403)
  }
}
console.log("i am in app>>errors>> forbidden error");
export default ForbiddenError
