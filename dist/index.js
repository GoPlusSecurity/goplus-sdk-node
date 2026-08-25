"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GoPlus = exports.ErrorCode = void 0;
var _api = _interopRequireDefault(require("./script/api.js"));
var _errorcode = _interopRequireDefault(require("./script/errorcode.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const GoPlus = exports.GoPlus = _api.default;
const ErrorCode = exports.ErrorCode = _errorcode.default;
var _default = exports.default = {
  GoPlus,
  ErrorCode
};