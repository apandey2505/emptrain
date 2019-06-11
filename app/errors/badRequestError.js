import BaseError from './baseError'
console.log("i am in app>>errors>> bad request");

class BadRequestError extends BaseError {
  constructor (message) {
    super(message, 400)
  }
}

export default BadRequestError
