"use strict";

var readSingle = /*#__PURE__*/require("./_readSingle.js");

var createSub = /*#__PURE__*/require("./_addSubffixes.js");

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