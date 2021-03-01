"use strict";

module.exports = function (sequelize, DataTypes) {
  var Teacher_Subject_Class = sequelize.define("teacher_subject_class", {
    teacherID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teachers',
        key: 'ID'
      }
    },
    subjectCode: {
      type: DataTypes.STRING,
      references: {
        model: 'subjects',
        key: 'subjectCode'
      }
    },
    subjectName: {
      type: DataTypes.STRING,
      references: {
        model: 'subjects',
        key: 'subjectName'
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
  return Teacher_Subject_Class;
};