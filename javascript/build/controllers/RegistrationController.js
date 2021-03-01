"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _logger = _interopRequireDefault(require("../config/logger"));

var _class = _interopRequireDefault(require("../services/database-services/class.service"));

var _student = _interopRequireDefault(require("../services/database-services/student.service"));

var _teacher = _interopRequireDefault(require("../services/database-services/teacher.service"));

var _subject = _interopRequireDefault(require("../services/database-services/subject.service"));

var _db = _interopRequireDefault(require("../models/db"));

var LOG = new _logger["default"]('RegistrationController.js');

var RegistrationController = _express["default"].Router();

var teacherService = new _teacher["default"]();
var classService = new _class["default"]();
var subjectService = new _subject["default"]();
var studentService = new _student["default"]();

var registerHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data, teacher, students, subject, class_data, i, _i;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = req.body;
            _context.prev = 1;
            teacher = null;
            students = [];
            subject = null;
            class_data = null;

            if (!data.teacher) {
              _context.next = 10;
              break;
            }

            _context.next = 9;
            return teacherService.upsert(data.teacher);

          case 9:
            teacher = _context.sent;

          case 10:
            ;

            if (!data.students) {
              _context.next = 22;
              break;
            }

            i = 0;

          case 13:
            if (!(i < data.students.length)) {
              _context.next = 22;
              break;
            }

            _context.t0 = students;
            _context.next = 17;
            return studentService.upsert(data.students[i]);

          case 17:
            _context.t1 = _context.sent;

            _context.t0.push.call(_context.t0, _context.t1);

          case 19:
            i++;
            _context.next = 13;
            break;

          case 22:
            if (!data.subject) {
              _context.next = 26;
              break;
            }

            _context.next = 25;
            return subjectService.upsert(data.subject);

          case 25:
            subject = _context.sent;

          case 26:
            ;

            if (!data["class"]) {
              _context.next = 31;
              break;
            }

            _context.next = 30;
            return classService.upsert(data["class"]);

          case 30:
            class_data = _context.sent;

          case 31:
            if (!(data.teacher && data.subject && data["class"])) {
              _context.next = 34;
              break;
            }

            _context.next = 34;
            return _db["default"].teacher_subject_class.create({
              teacherID: teacher.ID,
              subjectCode: subject.subjectCode,
              subjectName: subject.name,
              classCode: class_data.classCode
            });

          case 34:
            if (!(data.students && data["class"])) {
              _context.next = 42;
              break;
            }

            _i = 0;

          case 36:
            if (!(_i < students.length)) {
              _context.next = 42;
              break;
            }

            _context.next = 39;
            return _db["default"].student_class.create({
              studentID: students[_i].ID,
              classCode: class_data.classCode
            });

          case 39:
            _i++;
            _context.next = 36;
            break;

          case 42:
            res.sendStatus(204);
            _context.next = 48;
            break;

          case 45:
            _context.prev = 45;
            _context.t2 = _context["catch"](1);

            if (_context.t2 instanceof _db["default"].Sequelize.UniqueConstraintError) {
              LOG.warn(_context.t2 + " : Duplicate entry");
              res.sendStatus(204);
            } else if (_context.t2 instanceof _db["default"].Sequelize.DatabaseError) {
              LOG.error(_context.t2.parent.message);
              res.status(400).send(_context.t2.parent.message);
            } else {
              LOG.error(_context.t2);
              res.sendStatus(500);
            }

          case 48:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 45]]);
  }));

  return function registerHandler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

RegistrationController.post('', registerHandler);
var _default = RegistrationController;
exports["default"] = _default;