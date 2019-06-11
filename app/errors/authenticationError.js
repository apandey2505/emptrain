import BaseError from './baseError'

console.log("i am in app>>errors>>authntication");

class AuthenticationError extends BaseError {
  constructor (message) {
    super(message, 401)
  }
}

export default AuthenticationError
