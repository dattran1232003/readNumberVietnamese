const mapper = require('../source/readClass/mapper')

describe('test mapper', () => {
  const aClassNumber = ['1', '1', '2']
  const readed = mapper(aClassNumber)

  it('should is an array has 3 elements', done => {
    expect(readed.length).toBe(3)
    return done()
  })
})
