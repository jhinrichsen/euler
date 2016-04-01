const I = require('immutable')

// :: -> Number
const euler1 = _ => I.Range(1, 1000)
  .filter(n => n % 3 === 0 || n % 5 === 0)
  .reduce((r, n) => r + n)
