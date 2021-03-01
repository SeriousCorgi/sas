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

var Subject = _db["default"].subject;

var SubjectService = /*#__PURE__*/function () {
  function SubjectService() {
    (0, _classCallCheck2["default"])(this, SubjectService);
  }

  (0, _createClass2["default"])(SubjectService, [{
    key: "upsert",
    value: function () {
      var _upsert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var subject;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Subject.findOne({
                  where: {
                    subjectCode: data.subjectCode
                  }
                });

              case 3:
                subject = _context.sent;

                if (!subject) {
                  _context.next = 8;
                  break;
                }

                if (!(subject.name != data.name)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", subject.update({
                  name: data.name
                }));

              case 7:
                return _context.abrupt("return", subject);

              case 8:
                ;
                return _context.abrupt("return", Subject.create({
                  name: data.name,
                  subjectCode: data.subjectCode
                }));

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));

      function upsert(_x) {
        return _upsert.apply(this, arguments);
      }

      return upsert;
    }()
  }]);
  return SubjectService;
}();

exports["default"] = SubjectService;