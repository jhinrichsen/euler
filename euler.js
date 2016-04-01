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

// :: -> [Date]
function * dates () {
  for (let year = 1901; year <= 2000; year++) {
    // Months are 0 based as in Java
    for (let month = 0; month < 12; month++) {
      // Days are 1 based
      yield new Date(year, month, 1)
    }
  }
}

// :: -> Number
// Can't find a way to construct Immutable.Seq(generator function)
const euler19 = _ => [...dates()]
  .filter(date => date.getDay() === 0)
  .reduce((r, n) => r + 1, 0)

exports.euler1 = euler1
exports.euler16 = euler16
exports.euler19 = euler19
