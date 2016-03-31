
'use strict'

const assert = require('assert')
// Not to be confused with 'bignumber'
const BigNumber = require('bignumber.js')

// For whatever reason, power operations need to be configured
BigNumber.config({ POW_PRECISION: 0 })

// :: Number -> Number
// works for n=15, but returns NaN for n=1000
const powerDigitSumBroke = n => Math.pow(2, n)
  .toString()
  .split('')
  .map(c => parseInt(c))
  .reduce((r, n) => r + n)

// console.log(powerDigitSum(15))

const powerDigitSum = n => new BigNumber(2).pow(n)
  // toString() might return exp represenation .toString()
  .toFixed()
  .split('')
  .map(c => parseInt(c))
  .reduce((r, n) => r + n)  

console.log(powerDigitSum(1000))