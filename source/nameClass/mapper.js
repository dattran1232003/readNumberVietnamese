const R = require('ramda')

const NAMES = ['', 'nghìn', 'triệu', 'tỷ']

const nameStretched = length => {
  return (length <= 4) ? R.take(length, NAMES).reverse() : 
  /** otherwise */ Array.from({ length })
    .reduce((accum, _, index) => 
      (index <= 3) ? [...accum] : /** otherwise */
        [...accum, accum[index - 3] + ' tỷ']
    , NAMES)
    .reverse()
}

const createNameStretched = R.compose(nameStretched, R.length)
const crossConcat = (leftArr, rightArr) => leftArr.flatMap((val, index) => [val, rightArr[index]])


const toName = arrNumber => {
  const names = createNameStretched(arrNumber)
  return crossConcat(arrNumber, names)
}

module.exports = toName

