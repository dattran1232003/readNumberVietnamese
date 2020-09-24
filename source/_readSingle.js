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
  // '0':  
}

const readSingle = (number, posistion, { previousNumber="", followingNumber="" }) => {

}

module.exports = readSingle
