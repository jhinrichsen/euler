
'use strict'

const BN = require('bn.js')

// :: Number -> Number
const euler16 = n => new BN(2).pow(new BN(n))
  .toString()
  .split('')
  .map(c => parseInt(c))
  .reduce((r, n) => r + n)  

console.log(euler16(1000))