"use strict";

var map = require('ramda/src/map');

var pipe = require('ramda/src/pipe');

var join = require('ramda/src/join');

var flatten = require('ramda/src/flatten');

var splitClass = require('./splitClass');

var nameClass = require('./nameClass');

var readClass = require('./readClass');

var exportsFunc = pipe(splitClass, map(readClass), nameClass, flatten, join(''));
module.exports = exportsFunc;