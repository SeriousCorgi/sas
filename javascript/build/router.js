"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _HealthcheckController = _interopRequireDefault(require("./controllers/HealthcheckController"));

var _RegistrationController = _interopRequireDefault(require("./controllers/RegistrationController"));

var router = _express["default"].Router();

router.use('/health', _HealthcheckController["default"]); // router.use('/register', RegistrationController);

var _default = router;
exports["default"] = _default;