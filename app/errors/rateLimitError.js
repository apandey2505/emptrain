import BaseError from './baseError'

class RateLimitError extends BaseError {
  constructor (message) {
    super(message, 429)
  }
}
console.log("i am in app>>errors>> rate limit error");
export default RateLimitError
