import readSingle from './_readSingle.js'
import createSub from './_addSubffixes.js'

export default (arrNumber) => {
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
