
'use strict'

const assert = require('assert')

// :: Number -> Number
// works for n=15, but returns NaN for n=1000
const powerDigitSum = n => Math.pow(2, n)
  .toString()
  .split('')
  .map(c => parseInt(c))
  .reduce((r, n) => r + n)

console.log(powerDigitSum(15))

// :: String -> Number -> String
// Zero pad a number in String represenation with leading 0s to length n
const zeroPad = (s, n) => {
  // Nothing fancy, just get the job done
  while (s.length < n) {
    s = `0${s}`
  }
  return s
}

const s1 = '31415'
assert(s1 === '31415', 'Unexpected data mutation')
assert(zeroPad(s1, 7) === '0031415')

// :: String -> Number -> [Number]
const asArray = (s, n) => zeroPad(s, n).split('')

// Add two numbers in String representation
const adds = (s1, s2) => {
  const l = Math.max(s1.length, s2.length)
  
  // Unfortunately, Javascript does not understand x'
  const x = asArray(s1, l)
  const y = asArray(s2, l)
  const z = Array(l)
  
  // No fancy japanese K* algos, just add from right to left taking 10
  // based overflow/ carry into account
  let carry = 0
  for (let i = x.length; --i >=0; ) {
    let m = x[i] * y[i] + carry
    if (m < 10) {
      carry = 0
    } else {
      m -= 10
      carry = 1
    }
    z[i] = m
  }
  const s = z.join('')
  return (carry ? `1${s}` : s)
}

// Multiply two numbers in String representation
const muls = (s1, s2) {
  // TODO  
}

assert('6' === adds('3', '3'), `Expected 6 but got ${adds('3', '3')}`)
assert('38' === adds('19', '19'), `Expected 38 but got ${adds('19', '19')}`)
assert('198' === adds('99', '99'), `Expected 198 but got ${adds('99', '99')}`)

assert('9' === muls('3', '3'), `Expected 9 but got ${muls('3', '3')}`)
assert('361' === muls('19', '19'), `Expected 361 but got ${muls('19', '19')}`)
assert('9801' === muls('99', '99'), `Expected 9801 but got ${muls('99', '99')}`)

