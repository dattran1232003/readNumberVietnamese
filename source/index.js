const R = require('ramda')

const splitClass = require('./splitClass')
const nameClass = require('./nameClass')
const readClass = require('./readClass')

const exportsFunc = R.pipe(
  splitClass,
  R.map(readClass),
  nameClass,
  R.flatten,
  R.join('')
)

module.exports = exportsFunc
