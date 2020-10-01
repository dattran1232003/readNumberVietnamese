const complexCaseHandler = require('../source/readClass/_readComplexCaseNumber')

const { _handle0, _handle1, _handle4, _handle5 } = complexCaseHandler
const Pos = { Hund: 2, Tens: 1, Unit: 0 }

describe('read complex cases Number', () => {
  test('cases of zero', done => {
    // Hundreds position
    expect(_handle0(Pos.Hund, {} )).toBe('không')
    // Tens position
    expect(_handle0(Pos.Tens, { followingNumber: '0' } )).toBe('')
    expect(_handle0(Pos.Tens, { followingNumber: '1' } )).toBe('linh')
    // Unit position 
    expect(_handle0(Pos.Unit, { previousNumber: '0' } )).toBe('')
    expect(_handle0(Pos.Unit, { previousNumber: '1' } )).toBe('')
    expect(_handle0(Pos.Unit, { previousNumber: '4' } )).toBe('')

    return done()
  })
  
  test('cases of one', done => {
    // Hundreds position
    expect(_handle1(Pos.Hund, {} )).toBe('một')
    // Tens position
    expect(_handle1(Pos.Tens, {} )).toBe('mười')
    // Unit position
    expect(_handle1(Pos.Unit, { previousNumber: '0' } )).toBe('một')
    expect(_handle1(Pos.Unit, { previousNumber: '1' } )).toBe('một')
    expect(_handle1(Pos.Unit, { previousNumber: '2' } )).toBe('mốt')
    expect(_handle1(Pos.Unit, { previousNumber: '3' } )).toBe('mốt')
    expect(_handle1(Pos.Unit, { previousNumber: '4' } )).toBe('mốt')
    expect(_handle1(Pos.Unit, { previousNumber: '5' } )).toBe('mốt')
    expect(_handle1(Pos.Unit, { previousNumber: '6' } )).toBe('mốt')
    expect(_handle1(Pos.Unit, { previousNumber: '7' } )).toBe('mốt')
    expect(_handle1(Pos.Unit, { previousNumber: '8' } )).toBe('mốt')
    expect(_handle1(Pos.Unit, { previousNumber: '9' } )).toBe('mốt')

    return done()
  })

  test('cases of four', done => {
    // Hundreds position
    expect(_handle4(Pos.Hund, {} )).toBe('bốn')
    // Tens position
    expect(_handle4(Pos.Tens, {} )).toBe('bốn')
    // Unit position
    expect(_handle4(Pos.Unit, { previousNumber: '0' } )).toBe('bốn')
    expect(_handle4(Pos.Unit, { previousNumber: '1' } )).toBe('bốn')
    expect(_handle4(Pos.Unit, { previousNumber: '2' } )).toBe('tư')
    expect(_handle4(Pos.Unit, { previousNumber: '3' } )).toBe('tư')
    expect(_handle4(Pos.Unit, { previousNumber: '4' } )).toBe('tư')
    expect(_handle4(Pos.Unit, { previousNumber: '5' } )).toBe('tư')
    expect(_handle4(Pos.Unit, { previousNumber: '6' } )).toBe('tư')
    expect(_handle4(Pos.Unit, { previousNumber: '7' } )).toBe('tư')
    expect(_handle4(Pos.Unit, { previousNumber: '8' } )).toBe('tư')
    expect(_handle4(Pos.Unit, { previousNumber: '9' } )).toBe('tư')

    return done()
  })

  test('cases of five', done => {
    // Hundreds position
    expect(_handle5(Pos.Hund, {} )).toBe('năm')
    // Tens position
    expect(_handle5(Pos.Tens, {} )).toBe('năm')
    // Unit position
    expect(_handle5(Pos.Unit, { previousNumber: '0' } )).toBe('năm')
    expect(_handle5(Pos.Unit, { previousNumber: '1' } )).toBe('lăm')
    expect(_handle5(Pos.Unit, { previousNumber: '2' } )).toBe('lăm')
    expect(_handle5(Pos.Unit, { previousNumber: '3' } )).toBe('lăm')
    expect(_handle5(Pos.Unit, { previousNumber: '4' } )).toBe('lăm')
    expect(_handle5(Pos.Unit, { previousNumber: '5' } )).toBe('lăm')
    expect(_handle5(Pos.Unit, { previousNumber: '6' } )).toBe('lăm')
    expect(_handle5(Pos.Unit, { previousNumber: '7' } )).toBe('lăm')
    expect(_handle5(Pos.Unit, { previousNumber: '8' } )).toBe('lăm')
    expect(_handle5(Pos.Unit, { previousNumber: '9' } )).toBe('lăm')

    return done()
  })
})
