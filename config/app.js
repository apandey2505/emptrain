// const convict = require('convict');
// console.log("i am in confIG >>APP.JS");

// const config = convict({
//   app: {
//     name: {
//       doc: 'Patientory File Manager',
//       format: String,
//       default: 'Employee Training server'
//     }
//   },
//   env: {
//     doc: 'The application environment.',
//     format: ['production', 'development', 'staging', 'test'],
//     default: 'development',
//     env: 'NODE_ENV'
//   },
//   port: {
//     doc: 'The port to bind.',
//     format: 'port',
//     default: 3000,
//     env: 'PORT'
//   },
// })

// config.validate({ allowed: 'strict' })

// module.exports = config





const convict = require('convict')
const validate = require('validate.js')

const config = convict({
  app: {
    name: {
      doc: 'Training Application',
      format: String,
      default: 'Training Application'
    }
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 4563,
    env: 'PORT'
  },
  log_level: {
    doc: 'level of logs to show',
    format: String,
    default: '',
    env: 'LOG_LEVEL'
  },
  ip: {
    doc: "The IP address to bind.",
    format: "ipaddress",
    default: "127.0.0.1",
    env: "IP_ADDRESS"
  },
  db: {
    host: {
      default: "127.0.0.1",
      env: "DB_HOST"
    },
    name : "postgres",
    password: "123",
    user: "postgres"
  } 
})


config.validate({ allowed: 'strict' })

module.exports = config
