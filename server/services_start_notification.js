let config = require('../config/app')
let twilio = require('twilio')

console.log("i am in server>>service_start_no");

let client = twilio(config.get('twilio.accountSid'), config.get('twilio.authToken'))
let serviceName = config.get('app.name')

client.messages.create({
  to: '+919754968190',
  from: config.get('twilio.fromNumber'),
  body: `${serviceName} started on ${config.get('env')}`
})

client.messages.create({
  to: '+918605201092',
  from: config.get('twilio.fromNumber'),
  body: `${serviceName} started on ${config.get('env')}`
})
