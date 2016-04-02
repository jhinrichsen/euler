/* global describe, it */

const assert = require('assert')

const Euler = require('../')

describe('Euler', function () {
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
})
