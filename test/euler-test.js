/* global describe, it */

const assert = require('assert')

const Euler = require('../')

describe('Euler', function () {
  // Euler92 takes minutes
  this.timeout(1000000)
  
  describe('#euler1()', function () {
    it('solves Project Euler #1', function () {
      assert.equal(233168, Euler.euler1())
    })
  })
  describe('#euler16()', function () {
    it('solves Project Euler #16', function () {
      assert.equal(1366, Euler.euler16(1000))
    })
  })
  describe('#euler19()', function () {
    it('solves Project Euler #19', function () {
      assert.equal(171, Euler.euler19())
    })
  })
  describe('#euler20()', function () {
    it('solves Project Euler #20', function () {
      assert.equal(648, Euler.euler20(100))
    })
  })
  describe('#euler48()', function () {
    it('solves Project Euler #48', function () {
      assert.equal('9110846700', Euler.euler48())
    })
  })
  describe('#squareDigit(44)', function () {
    it('returns 32 for the sum of square digits of 44', function () {
      assert.equal(32, Euler.squareDigit(44))
    })
  })
  describe('#squareDigit(85)', function () {
    it('returns 89 for the sum of square digits of 85', function () {
      assert.equal(89, Euler.squareDigit(85))
    })
  })
  describe('#squareDigitChain(44)', function () {
    it('returns square digit chain value 44', function () {
      assert.deepEqual([ 44, 32, 13, 10, 1 ], [...Euler.squareDigitChain(44)])
    })
  })
  describe('#squareDigitChain(85)', function () {
    it('returns square digit chain value 85', function () {
      assert.deepEqual([ 89, 145, 42, 20, 4, 16, 37, 58, 89 ],
        [...Euler.squareDigitChain(89)])
    })
  })
  describe('#euler92()', function () {
    it('solves Project Euler #92', function () {
      assert.equal(8581146, Euler.euler92(1e7))
    })
  })
})

