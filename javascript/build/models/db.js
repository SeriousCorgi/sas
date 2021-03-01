"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = _interopRequireDefault(require("../config/database"));

var db = {};
db.Sequelize = _sequelize["default"];
db.sequelize = _database["default"];
db.teacher = require('./teacher.model')(_database["default"], _sequelize["default"]);
db.student = require('./student.model')(_database["default"], _sequelize["default"]);
db.subject = require('./subject.model')(_database["default"], _sequelize["default"]);
db["class"] = require('./class.model')(_database["default"], _sequelize["default"]);
db.student_class = require('./student_class.model')(_database["default"], _sequelize["default"]);
db.teacher_subject_class = require('./teacher_subject_class.model')(_database["default"], _sequelize["default"]);
db.teacher.hasMany(db.teacher_subject_class, {
  foreignKey: "teacherID"
});
db.teacher_subject_class.belongsTo(db.teacher, {
  foreignKey: "ID"
});
db.student.belongsToMany(db["class"], {
  through: "student_class",
  foreignKey: "ID"
});
db["class"].belongsToMany(db.student, {
  through: "student_class",
  foreignKey: "classCode"
});
var _default = db;
exports["default"] = _default;