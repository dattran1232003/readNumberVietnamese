const map = require('ramda/src/map')
const pipe = require('ramda/src/pipe')
const join = require('ramda/src/join')
const flatten = require('ramda/src/flatten')

const splitClass = require('./splitClass')
const nameClass = require('./nameClass')
const readClass = require('./readClass')

const exportsFunc = pipe(
  splitClass,
  map(readClass),
  nameClass,
  flatten,
  join('')
)

module.exports = exportsFunc
