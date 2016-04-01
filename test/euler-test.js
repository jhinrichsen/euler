const assert = require('assert')

const Euler = require('../')

describe('Euler', function() {
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
})