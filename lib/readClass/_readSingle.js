"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var always = require('ramda/src/always');

var simpleConditions = {
  '2': always('hai'),
  '3': always('ba'),
  '6': always('sáu'),
  '7': always('bảy'),
  '8': always('tám'),
  '9': always('chín')
};

var complexCase = require('./_readComplexCaseNumber');

var complexConditions = {
  "0": complexCase._handle0,
  "1": complexCase._handle1,
  "4": complexCase._handle4,
  "5": complexCase._handle5
};

var readers = _objectSpread(_objectSpread({}, simpleConditions), complexConditions);

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

module.exports = readSingle;