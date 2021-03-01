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

var Class = _db["default"]["class"];

var ClassService = /*#__PURE__*/function () {
  function ClassService() {
    (0, _classCallCheck2["default"])(this, ClassService);
  }

  (0, _createClass2["default"])(ClassService, [{
    key: "upsert",
    value: function () {
      var _upsert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var class_data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Class.findOne({
                  where: {
                    classCode: data.classCode
                  }
                });

              case 3:
                class_data = _context.sent;

                if (!class_data) {
                  _context.next = 8;
                  break;
                }

                if (!(class_data.name != data.name)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", class_data.update({
                  name: data.name
                }));

              case 7:
                return _context.abrupt("return", class_data);

              case 8:
                ;
                return _context.abrupt("return", Class.create({
                  name: data.name,
                  classCode: data.classCode
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
  return ClassService;
}();

exports["default"] = ClassService;