const readSingle = require('./_readSingle')

module.exports = (arrNumber) => arrNumber.map((number, position) => 
  readSingle(
    number, position, {
      previousNumber: arrNumber[position + 1] || '',
      followingNumber: arrNumber[position - 1] || ''
    }
  )
)
