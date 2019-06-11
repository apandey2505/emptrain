
const Sequelize = require('sequelize');
const db = new Sequelize('database_Emp', 'user_1', '123', {
  host: 'localhost',
  dialect: 'postgres',
  "port": "5432",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});
module.exports = db;

// import Sequelize from 'sequelize'
// const config = require('../config/app')
// const sequelize = new Sequelize(config.get('db.name'), config.get('db.user'), config.get('db.password'),  {
//   host: config.get('db.host'),
//   port: 5432,
//   dialect: 'postgres',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })

// sequelize
//   .authenticate()
//   .then(() => {
//     console.dir(sequelize);
//     console.log('Connection has been established successfully.')
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err)
//   })

// export default sequelize

