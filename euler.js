'use strict'

const BN = require('bn.js')
const I = require('immutable')

// :: -> Number
const euler1 = _ => I.Range(1, 1000)
  .filter(n => n % 3 === 0 || n % 5 === 0)
  .reduce((r, n) => r + n)

// :: Number -> Number
const euler16 = n => new BN(2).pow(new BN(n))
  .toString()
  .split('')
  .map(c => parseInt(c))
  .reduce((r, n) => r + n)

exports.euler1 = euler1
exports.euler16 = euler16
