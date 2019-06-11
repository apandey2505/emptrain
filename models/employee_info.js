// 'use strict';

// const sequelize = require('../server/sequelize');
// module.exports = (sequelize , DataTypes) => {
//   console.log("1111111111111111111111111111111111111111111111111111111111111111")
//   const employee_info = sequelize.define('employee_info', {
//     emp_id :  DataTypes.INTEGER, 
//     emp_name: DataTypes.CHAR,
//     emp_emailid: DataTypes.CHAR
//   }, {})
//   employee_info.associate = function(models) {
//     // associations can be defined here
//   };
//   return employee_info;
// };


//database wide options
var opts = {
  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true
  }
}


'use strict';
const sequelize = require('../server/sequelize', opts);
module.exports = (sequelize, DataTypes) => {
  console.log("+++++++++++++++++")
  const employee_info = sequelize.define('employee_info', {
    emp_name: DataTypes.CHAR,
    emp_emailid: DataTypes.CHAR
  }, {
    freezeTableName: true

  });
  employee_info.associate = function (models) {
    // associations can be defined here
  };
  return employee_info;
};
