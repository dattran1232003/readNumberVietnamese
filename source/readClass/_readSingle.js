import complexCase from './_readComplexCaseNumber'

const always = x => () => x

const simpleConditions = {
  '2': always('hai'),
  '3': always('ba'),
  '6': always('sáu'),
  '7': always('bảy'),
  '8': always('tám'),
  '9': always('chín')
}


const complexConditions = {
  "0": complexCase._handle0,
  "1": complexCase._handle1,
  "4": complexCase._handle4,
  "5": complexCase._handle5
}

const readers = { ...simpleConditions, ...complexConditions }

const readSingle = (number, posistion, otherNumbers={ previousNumber:"", followingNumber:"" }) => {
  // or function which's return the empty string
  const readThatNumber = readers[number] || (() => '') 
  return readThatNumber(posistion, otherNumbers)
}

export default readSingle
