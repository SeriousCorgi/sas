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

var LOG = new _logger["default"]('student.service.js');
var Student = _db["default"].student;

var StudentService = /*#__PURE__*/function () {
  function StudentService() {
    (0, _classCallCheck2["default"])(this, StudentService);
  }

  (0, _createClass2["default"])(StudentService, [{
    key: "upsert",
    value: function () {
      var _upsert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var student;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Student.findOne({
                  where: {
                    email: data.email
                  }
                });

              case 3:
                student = _context.sent;

                if (!student) {
                  _context.next = 8;
                  break;
                }

                if (!(student.name != data.name)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", student.update({
                  name: data.name
                }));

              case 7:
                return _context.abrupt("return", student);

              case 8:
                return _context.abrupt("return", Student.create({
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
  }]);
  return StudentService;
}();

exports["default"] = StudentService;