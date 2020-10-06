"use strict";

var pureFns = /*#__PURE__*/require("../pureFunction");

var pipe = pureFns.pipe,
    split = pureFns.split,
    splitEvery = pureFns.splitEvery,
    reverse = pureFns.reverse;

var toString = function toString(str) {
  return str.toString();
};

var exportFunc = /*#__PURE__*/pipe(toString, reverse, /*#__PURE__*/split(''), /*#__PURE__*/splitEvery(3));
module.exports = exportFunc;