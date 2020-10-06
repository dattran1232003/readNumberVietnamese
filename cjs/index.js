"use strict";

var pureFns = /*#__PURE__*/require("./pureFunction");

var pipe = pureFns.pipe,
    map = pureFns.map,
    trim = pureFns.trim,
    join = pureFns.join,
    flatten = pureFns.flatten;

var splitClass = /*#__PURE__*/require("./splitClass/index");

var nameClass = /*#__PURE__*/require("./nameClass/index");

var readClass = /*#__PURE__*/require("./readClass/index");

module.exports = /*#__PURE__*/pipe(splitClass, /*#__PURE__*/map(readClass), nameClass, flatten, /*#__PURE__*/join(''), trim);