import mapper from '../source/readClass/mapper'

describe('test mapper', () => {
  const aClassNumber = ['5', '2', '2']
  const readed = mapper(aClassNumber)

  it('should read right', done => {
    expect(readed).toBe('hai trăm hai mươi lăm ')
    return done()
  })
})
