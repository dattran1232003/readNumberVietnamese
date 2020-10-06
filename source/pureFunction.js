const splitEvery = every => array => 
  array.map((val, idx) => 
    (idx !== 0 && (idx+1) % every === 0) ?
      [array[idx - 2], array[idx - 1], val] : undefined
  , array)  
  .filter(x => x !== undefined)

const reuseFns = {
  trim : str => str.trim(),
  length : str => str.length,
  map :  cb => arr => arr.map(x => cb(x)),
  mapIdx : cb => arr => arr.map(cb),
  pipe : (...fns) => x => fns.reduce((v, f) => f(v), x),
  join : char => arr => arr.join(char),
  flatten : list => list.flat(),
  split : char => str => str.split(char),
  splitEvery,
  reverseArr : arr => arr.reverse(),
  reverseStr : str => str.split('').reverse().join(''),
}

const dependentFns = {
  reverse : val => typeof val === 'string' ? reuseFns.reverseStr(val) : reuseFns.reverseArr(val)
}

export default { ...reuseFns, ...dependentFns }
