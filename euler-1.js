const I = require('immutable')

console.log(
  I.Range(1, 1000)
  .filter(n => n % 3 === 0 || n % 5 === 0)
  .reduce((r, n) => r + n))
