"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = _interopRequireDefault(require("../../models/db"));

var _logger = _interopRequireDefault(require("../../config/logger"));

var LOG = new _logger["default"]('teacher.service.js');
var Teacher = _db["default"].teacher;
var TSC = _db["default"].teacher_subject_class;

var TeacherService = /*#__PURE__*/function () {
  function TeacherService() {
    (0, _classCallCheck2["default"])(this, TeacherService);
  }

  (0, _createClass2["default"])(TeacherService, [{
    key: "upsert",
    value: function () {
      var _upsert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var teacher;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Teacher.findOne({
                  where: {
                    email: data.email
                  }
                });

              case 3:
                teacher = _context.sent;

                if (!teacher) {
                  _context.next = 8;
                  break;
                }

                if (!(teacher.name != data.name)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", teacher.update({
                  name: data.name
                }));

              case 7:
                return _context.abrupt("return", teacher);

              case 8:
                return _context.abrupt("return", Teacher.create({
                  name: data.name,
                  email: data.email
                }));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      function upsert(_x) {
        return _upsert.apply(this, arguments);
      }

      return upsert;
    }()
  }, {
    key: "fetchAll",
    value: function () {
      var _fetchAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                return _context2.abrupt("return", Teacher.findAll({
                  attributes: ['name', [_db["default"].Sequelize.col('teacher_subject_classes.subjectCode'), 'subjectCode'], [_db["default"].Sequelize.col('teacher_subject_classes.subjectName'), 'subjectName'], [_db["default"].Sequelize.fn('COUNT', 'teacher_subject_classes.classCode'), 'numberOfClasses']],
                  include: [{
                    model: TSC,
                    as: 'teacher_subject_classes',
                    attributes: []
                  }],
                  group: ['teachers.ID', 'subjectCode', 'subjectName'],
                  raw: true
                }));

              case 4:
                _context2.prev = 4;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 4]]);
      }));

      function fetchAll() {
        return _fetchAll.apply(this, arguments);
      }

      return fetchAll;
    }()
  }]);
  return TeacherService;
}();

exports["default"] = TeacherService;