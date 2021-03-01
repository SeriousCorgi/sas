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
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  return Student;
};