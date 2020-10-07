"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pureFunction = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("./pureFunction.js"));

var _index = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("./splitClass/index.js"));

var _index2 = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("./nameClass/index.js"));

var _index3 = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("./readClass/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pipe = _pureFunction["default"].pipe,
    map = _pureFunction["default"].map,
    trim = _pureFunction["default"].trim,
    join = _pureFunction["default"].join,
    flatten = _pureFunction["default"].flatten;

var _default = /*#__PURE__*/pipe(_index["default"], /*#__PURE__*/map(_index3["default"]), _index2["default"], flatten, /*#__PURE__*/join(''), trim);

exports["default"] = _default;