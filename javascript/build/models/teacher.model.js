"use strict";

module.exports = function (sequelize, DataTypes) {
  var Teacher = sequelize.define("teachers", {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    timestamps: false
  });
  return Teacher;
};