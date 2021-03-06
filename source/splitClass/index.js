import pureFns from '../pureFunction.js'
const { pipe, split, splitEvery, reverse } = pureFns

const toString = str => str.toString()

const exportFunc = pipe(
  toString,
  reverse,
  split(''),
  splitEvery(3)
)

export default exportFunc 
