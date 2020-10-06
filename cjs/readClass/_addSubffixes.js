"use strict";

module.exports = function (arrNumber) {
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