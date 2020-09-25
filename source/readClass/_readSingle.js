const R = require('ramda')

R.comp = R.compose

const simpleConditions = {
  '2': R.always('hai'),
  '3': R.always('ba'),
  '6': R.always('sáu'),
  '7': R.always('bảy'),
  '8': R.always('tám'),
  '9': R.always('chín')
}

const complexCase = require('./_readComplexCaseNumber')

const complexConditions = {
  "0": complexCase._handle0,
  "1": complexCase._handle1,
  "4": complexCase._handle4,
  "5": complexCase._handle5,
}

const readers = { ...simpleConditions, ...complexConditions }

const readSingle = (number, posistion, otherNumbers={ previousNumber:"", followingNumber:"" }) => {
  const readThatNumber = readers[number] || (_ => '') // or function which return the empty string
  return readThatNumber(posistion, otherNumbers)
}

module.exports = readSingle
