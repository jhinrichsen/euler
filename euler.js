'use strict'

const BN = require('bn.js')
const I = require('immutable')
const R = require('ramda')

// :: -> Number
const euler1 = () => I.Range(1, 1000)
  .filter((n) => n % 3 === 0 || n % 5 === 0)
  .reduce((r, n) => r + n)

// :: Number -> Number
const euler16 = (n) => new BN(2).pow(new BN(n))
  .toString()
  .split('')
  .map((c) => parseInt(c, 10))
  .reduce((r, n) => r + n)

// :: -> Number
// Date's month is 0 based, days are 1 based (as in Java)
const euler19 = () => R.xprod(I.Range(1901, 2001).toArray(),
  I.Range(0, 12).toArray())
  .map((ym) => new Date(...ym, 1))
  .filter((date) => date.getDay() === 0)
  .reduce((r) => r + 1, 0)

exports.euler1 = euler1
exports.euler16 = euler16
exports.euler19 = euler19
