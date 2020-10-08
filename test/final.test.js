import readNumber from '../es'

test('readNumber final result', done => {
  const number = '123921'
  const numberReaded = readNumber(number)

  expect(numberReaded).toBe('một trăm hai mươi ba nghìn chín trăm hai mươi mốt')

  return done()
})

