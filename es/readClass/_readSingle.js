"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _readComplexCaseNumber = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("./_readComplexCaseNumber.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var always = function always(x) {
  return function () {
    return x;
  };
};

var simpleConditions = {
  '2': /*#__PURE__*/always('hai'),
  '3': /*#__PURE__*/always('ba'),
  '6': /*#__PURE__*/always('sáu'),
  '7': /*#__PURE__*/always('bảy'),
  '8': /*#__PURE__*/always('tám'),
  '9': /*#__PURE__*/always('chín')
};
var complexConditions = {
  "0": _readComplexCaseNumber["default"]._handle0,
  "1": _readComplexCaseNumber["default"]._handle1,
  "4": _readComplexCaseNumber["default"]._handle4,
  "5": _readComplexCaseNumber["default"]._handle5
};

var readers = /*#__PURE__*/_objectSpread( /*#__PURE__*/_objectSpread({}, simpleConditions), complexConditions);

var readSingle = function readSingle(number, posistion) {
  var otherNumbers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    previousNumber: "",
    followingNumber: ""
  };

  // or function which's return the empty string
  var readThatNumber = readers[number] || function () {
    return '';
  };

  return readThatNumber(posistion, otherNumbers);
};

var _default = readSingle;
exports["default"] = _default;