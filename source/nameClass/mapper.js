const NAMES = [' ', 'nghìn ', 'triệu ', 'tỷ ']

const take = (length, arr) => arr.slice(0, length)
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)
const length = str => str.length

const nameStretched = length => {
  return (length <= 4) ? take(length, NAMES) : 
  /** otherwise */ Array.from({ length })
    .reduce((accum, _, index) => 
      (index < 4) ? [...accum] : /** otherwise */
        [...accum, accum[index - 3] + 'tỷ ']
    , NAMES)
}

const createNameStretched = compose(nameStretched, length)
const crossConcat = (leftArr, rightArr) => leftArr.map((val, index) => [val, rightArr[index]])


const toName = arrNumber => {
  const names = createNameStretched(arrNumber)
  return crossConcat(arrNumber, names).reverse()
}


export default toName

