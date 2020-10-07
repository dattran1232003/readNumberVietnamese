"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pureFunction = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("../pureFunction.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pipe = _pureFunction["default"].pipe,
    split = _pureFunction["default"].split,
    splitEvery = _pureFunction["default"].splitEvery,
    reverse = _pureFunction["default"].reverse;

var toString = function toString(str) {
  return str.toString();
};

var exportFunc = /*#__PURE__*/pipe(toString, reverse, /*#__PURE__*/split(''), /*#__PURE__*/splitEvery(3));
var _default = exportFunc;
exports["default"] = _default;