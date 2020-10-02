"use strict";

var readSingle = require('./_readSingle');

var createSub = require('./_addSubffixes');

module.exports = function (arrNumber) {
  var words = arrNumber.map(function (number, position) {
    return readSingle(number, position, {
      previousNumber: arrNumber[position + 1] || '',
      followingNumber: arrNumber[position - 1] || ''
    });
  });
  var subs = createSub(arrNumber); // add sub to word and return

  return words.map(function (number, position) {
    return "".concat(number, " ").concat(subs[position]);
  }).reverse().join('');
};