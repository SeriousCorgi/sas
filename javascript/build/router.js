"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _HealthcheckController = _interopRequireDefault(require("./controllers/HealthcheckController"));

var _RegistrationController = _interopRequireDefault(require("./controllers/RegistrationController"));

var _ReportController = _interopRequireDefault(require("./controllers/ReportController"));

var router = _express["default"].Router();

router.use('/', _HealthcheckController["default"]);
router.use('/register', _RegistrationController["default"]);
router.use('/reports', _ReportController["default"]);
var _default = router;
exports["default"] = _default;