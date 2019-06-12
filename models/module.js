'use strict';
module.exports = (sequelize, DataTypes) => {
  const module = sequelize.define('module', {
    module_name: DataTypes.STRING,
    task_id: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {});
  module.associate = function (models) {
    // associations can be defined here
  };
  return module;
};
