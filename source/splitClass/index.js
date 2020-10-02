const pipe = require('ramda/src/pipe')
const split = require('ramda/src/split')
const reverse = require('ramda/src/reverse')
const splitEvery = require('ramda/src/splitEvery')

const toString = str => str.toString()

module.exports = pipe(
  toString,
  reverse,
  split(''),
  splitEvery(3)
)
