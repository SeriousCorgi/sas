"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _database = _interopRequireDefault(require("../config/database"));

module.exports = function (sequelize, DataTypes) {
  var Subject = sequelize.define("subjects", {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    subjectCode: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    timestamps: false
  });
  return Subject;
};