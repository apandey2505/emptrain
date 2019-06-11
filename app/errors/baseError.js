class BaseError extends Error {
  constructor (message, status) {
    super()
    this.status = status
    this.message = message
  }
}
console.log("i am in app>>errors>> base error");
export default BaseError
