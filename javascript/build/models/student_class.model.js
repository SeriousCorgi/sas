"use strict";

module.exports = function (sequelize, DataTypes) {
  var Student_Class = sequelize.define("student_class", {
    studentID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'students',
        key: 'ID'
      }
    },
    classCode: {
      type: DataTypes.STRING,
      references: {
        model: 'classes',
        key: 'classCode'
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
  return Student_Class;
};