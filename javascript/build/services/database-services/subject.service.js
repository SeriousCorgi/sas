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

var LOG = new _logger["default"]('subject.service.js');
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

                if (!(data.subjectCode == null || data.name == null)) {
                  _context.next = 3;
                  break;
                }

                throw new _db["default"].Sequelize.DatabaseError(new Error('Missing input field'));

              case 3:
                _context.next = 5;
                return Subject.findOne({
                  where: {
                    subjectCode: data.subjectCode
                  }
                });

              case 5:
                subject = _context.sent;

                if (!subject) {
                  _context.next = 13;
                  break;
                }

                if (!(subject.name != data.name)) {
                  _context.next = 10;
                  break;
                }

                LOG.info("Updating subject: " + subject.name);
                return _context.abrupt("return", subject.update({
                  name: data.name
                }));

              case 10:
                return _context.abrupt("return", subject);

              case 13:
                LOG.info("Adding new subject: " + data.name);
                return _context.abrupt("return", Subject.create({
                  name: data.name,
                  subjectCode: data.subjectCode
                }));

              case 15:
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 17]]);
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