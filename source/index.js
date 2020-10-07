import pureFns from './pureFunction.js'
const { pipe, map, trim, join, flatten } = pureFns

import splitClass from './splitClass/index.js'
import nameClass from './nameClass/index.js'
import readClass from './readClass/index.js'

export default pipe(
  splitClass,
  map(readClass),
  nameClass,
  flatten,
  join(''),
  trim
)
