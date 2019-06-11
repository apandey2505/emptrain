import BaseError from './baseError'

class ServiceUnavailableError extends BaseError {
  constructor (message) {
    super(message, 503)
  }
}

console.log("i am in app>>errors>> service unavailble");

export default ServiceUnavailableError
