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
