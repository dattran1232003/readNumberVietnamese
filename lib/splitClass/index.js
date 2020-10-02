"use strict";

var pipe = require('ramda/src/pipe');

var split = require('ramda/src/split');

var reverse = require('ramda/src/reverse');

var splitEvery = require('ramda/src/splitEvery');

var toString = function toString(str) {
  return str.toString();
};

module.exports = pipe(toString, reverse, split(''), splitEvery(3));