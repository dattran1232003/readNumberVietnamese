const R = require('ramda')

const toString = str => str.toString()

module.exports = R.pipe(
  toString,
  R.reverse,
  R.split(''),
  R.splitEvery(3)
)
