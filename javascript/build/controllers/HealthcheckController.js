"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _httpStatusCodes = require("http-status-codes");

var HealthcheckController = _express["default"].Router();

var healthcheckHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", res.sendStatus(_httpStatusCodes.OK));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function healthcheckHandler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

HealthcheckController.route('/healthcheck').get(healthcheckHandler);
var _default = HealthcheckController;
exports["default"] = _default;