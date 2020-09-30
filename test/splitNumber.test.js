const splitNumber = require('../source/splitClass')

describe('Split number into array', () => {
  const input = '354123'
  const shouldBe = [ ['3', '2', '1'], ['4', '5', '3'] ]
  it('input should be ' + shouldBe, done => {
    const value = splitNumber(input)
    expect(value).toStrictEqual(shouldBe)
    return done()
  })
})
