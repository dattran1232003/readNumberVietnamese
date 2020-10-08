"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isHundres = function isHundres(position) {
  return position === 2;
};

var isTens = function isTens(position) {
  return position === 1;
};

var isUnits = function isUnits(position) {
  return position === 0;
};

var _handle0 = function _handle0(position, _ref) {
  var _ref$followingNumber = _ref.followingNumber,
      followingNumber = _ref$followingNumber === void 0 ? '' : _ref$followingNumber;
  return isHundres(position) ? 'không' : isTens(position) ? followingNumber === '0' ? '' : 'linh' : isUnits(position) && '';
};

var _handle1 = function _handle1(position, _ref2) {
  var _ref2$previousNumber = _ref2.previousNumber,
      previousNumber = _ref2$previousNumber === void 0 ? '' : _ref2$previousNumber;
  return isHundres(position) ? 'một' : isTens(position) ? 'mười' : isUnits(position) && (['', '0', '1'].includes(previousNumber) ? 'một' : 'mốt');
};

var _handle4 = function _handle4(position, _ref3) {
  var _ref3$previousNumber = _ref3.previousNumber,
      previousNumber = _ref3$previousNumber === void 0 ? '' : _ref3$previousNumber;
  return isHundres(position) || isTens(position) ? 'bốn' : isUnits(position) && (['', '0', '1'].includes(previousNumber) ? 'bốn' : 'tư');
};

var _handle5 = function _handle5(position, _ref4) {
  var _ref4$previousNumber = _ref4.previousNumber,
      previousNumber = _ref4$previousNumber === void 0 ? '' : _ref4$previousNumber;
  return isHundres(position) || isTens(position) ? 'năm' : isUnits(position) && (['', '0'].includes(previousNumber) ? 'năm' : 'lăm');
};

var _default = {
  _handle0: _handle0,
  _handle1: _handle1,
  _handle4: _handle4,
  _handle5: _handle5
};
exports["default"] = _default;
module.exports = exports.default;