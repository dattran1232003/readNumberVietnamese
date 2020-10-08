"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(arrNumber) {
  return arrNumber.map(function (number, position) {
    if (position === 2) {
      // Hundred
      return 'trăm ';
    } else if (position === 1) {
      // Tens
      return ['0', '1'].includes(number) ? '' : 'mươi ';
    } else {
      // Unit
      return '';
    }
  });
};

exports["default"] = _default;
module.exports = exports.default;