import pureFns from './pureFunction'
const { pipe, map, trim, join, flatten } = pureFns

import splitClass from './splitClass/index'
import nameClass from './nameClass/index'
import readClass from './readClass/index'

export default pipe(
  splitClass,
  map(readClass),
  nameClass,
  flatten,
  join(''),
  trim
)
