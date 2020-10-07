"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _readSingle = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("./_readSingle.js"));

var _addSubffixes = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("./_addSubffixes.js"));

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