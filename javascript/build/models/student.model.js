"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _class = _interopRequireDefault(require("./class.model"));

module.exports = function (sequelize, DataTypes) {
  var Student = sequelize.define("students", {
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
  return Student;
};