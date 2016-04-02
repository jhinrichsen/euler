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

// Number -> BN
const fac = (n) => I.Range(1, n + 1)
  .map((n) => new BN(n))
  .reduce ((r, n) => r.mul(n), new BN(1))

// :: Number -> Number
const euler20 = (n) => fac(n)
  .toString(10)
  .split('')
  .map((c) => parseInt(c, 10))
  .reduce((r, n) => r + n)

// :: -> Number
const euler48 = () => I.Range(1, 1001)
  .map((n) => {
    let p = new BN(n)
    return p.pow(p)
  })
  .reduce((r, n) => r.add(n), new BN(0))
  .toString(10)
  .slice(-10)

// :: Number -> Number
const squareDigit = (n) => n
  .toString()
  .split('')
  .map((n) => n * n)
  .reduce((r, n) => r + n)

// :: Number -> [Number]
function * squareDigitChain (n) {
  do {
    yield n
    n = squareDigit(n)
  } while (n !== 1 && n !== 89)
  yield n
}

// :: Number -> Number
// Slow: takes about 90 seconds on a 2013 MacBook Pro
const euler92_ = (n) => I.Range(1, n)
  .map((n) => I.Seq(squareDigitChain(n)).last())
  // 10 % faster, but mutation going on:
  // .map((n) => [...squareDigitChain(n)].pop())
  .filter((n) => n === 89)
  .count()

// :: Number -> boolean
// Highly specialized, but still takes 60s
const squareDigitsChainEndsIn89 = (n) => {
  for (;;) {
    if (n === 89) return true
    if (n === 1) return false
    n = squareDigit(n)
  }
}

// :: Number -> Number
const euler92 = (n) => I.Range(1, n)
  .map((n) => squareDigitsChainEndsIn89(n))
  .filter((b) => b)
  .count()

exports.euler1 = euler1
exports.euler16 = euler16
exports.euler19 = euler19
exports.euler20 = euler20
exports.euler48 = euler48
exports.squareDigit = squareDigit
exports.squareDigitChain = squareDigitChain
exports.euler92 = euler92
