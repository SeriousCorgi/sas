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

var _teacher = _interopRequireDefault(require("../services/database-services/teacher.service"));

var _subject = _interopRequireDefault(require("../services/database-services/subject.service"));

var LOG = new _logger["default"]('ReportController.js');

var ReportController = _express["default"].Router();

var teacherService = new _teacher["default"]();

var reportHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var reports, teachers, i;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            reports = {};
            _context.next = 4;
            return teacherService.fetchAll();

          case 4:
            teachers = _context.sent;

            for (i = 0; i < teachers.length; i++) {
              LOG.info(JSON.stringify(teachers[i]));
              reports[teachers[i].name] = reports[teachers[i].name] || [];
              reports[teachers[i].name].push({
                subjectCode: teachers[i].subjectCode,
                subjectName: teachers[i].subjectName,
                numberOfClasses: teachers[i].numberOfClasses
              });
            }

            ;
            res.status(200).json(reports);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            LOG.error(_context.t0);
            res.sendStatus(500);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function reportHandler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

ReportController.get('/workload', reportHandler);
var _default = ReportController;
exports["default"] = _default;