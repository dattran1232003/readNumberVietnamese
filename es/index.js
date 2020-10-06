"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pureFunction = _interopRequireDefault(require("./pureFunction"));

var _index = _interopRequireDefault(require("./splitClass/index"));

var _index2 = _interopRequireDefault(require("./nameClass/index"));

var _index3 = _interopRequireDefault(require("./readClass/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pipe = _pureFunction["default"].pipe,
    map = _pureFunction["default"].map,
    trim = _pureFunction["default"].trim,
    join = _pureFunction["default"].join,
    flatten = _pureFunction["default"].flatten;

var _default = pipe(_index["default"], map(_index3["default"]), _index2["default"], flatten, join(''), trim);

exports["default"] = _default;