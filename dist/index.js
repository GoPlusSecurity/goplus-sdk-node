"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GoPlus = exports.ErrorCode = void 0;
var _api = _interopRequireDefault(require("./script/api.js"));
var _errorcode = _interopRequireDefault(require("./script/errorcode.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const GoPlus = _api.default;
exports.GoPlus = GoPlus;
const ErrorCode = _errorcode.default;
exports.ErrorCode = ErrorCode;
var _default = {
  GoPlus,
  ErrorCode
};
exports.default = _default;