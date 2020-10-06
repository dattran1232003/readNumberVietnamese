"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _readSingle = _interopRequireDefault(require("./_readSingle"));

var _addSubffixes = _interopRequireDefault(require("./_addSubffixes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(arrNumber) {
  var words = arrNumber.map(function (number, position) {
    return (0, _readSingle["default"])(number, position, {
      previousNumber: arrNumber[position + 1] || '',
      followingNumber: arrNumber[position - 1] || ''
    });
  });
  var subs = (0, _addSubffixes["default"])(arrNumber); // add sub to word and return

  return words.map(function (number, position) {
    return "".concat(number, " ").concat(subs[position]);
  }).reverse().join('');
};

exports["default"] = _default;