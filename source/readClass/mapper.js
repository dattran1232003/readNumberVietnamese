const readSingle = require('./_readSingle')
const createSub = require('./_addSubffixes')

module.exports = (arrNumber) => {
  const words = arrNumber.map((number, position) => readSingle(
    number, position, {
      previousNumber: arrNumber[position + 1] || '',
      followingNumber: arrNumber[position - 1] || ''
    }
  ))

  const subs = createSub(arrNumber)

  // add sub to word and return
  return words
    .map((number, position) => `${number} ${subs[position]}`)
    .reverse()
    .join('')
}
