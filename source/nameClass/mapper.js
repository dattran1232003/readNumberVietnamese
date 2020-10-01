const R = require('ramda')

const NAMES = [' ', 'nghìn ', 'triệu ', 'tỷ ']

const nameStretched = length => {
  return (length <= 4) ? R.take(length, NAMES) : 
  /** otherwise */ Array.from({ length })
    .reduce((accum, _, index) => 
      (index < 4) ? [...accum] : /** otherwise */
        [...accum, accum[index - 3] + 'tỷ ']
    , NAMES)
}

const createNameStretched = R.compose(nameStretched, R.length)
const crossConcat = (leftArr, rightArr) => leftArr.map((val, index) => [val, rightArr[index]])


const toName = arrNumber => {
  const names = createNameStretched(arrNumber)
  return crossConcat(arrNumber, names).reverse()
}


module.exports = toName

