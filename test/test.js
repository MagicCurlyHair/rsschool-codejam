const assert = require('assert');
const sumOfOther = require('../sumOfOther');
const make = require('../make');

describe('Function tests', () => {
  describe('sumOfOther', () => {
    it('test 1', () => {
      assert.deepStrictEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
    });
    it('test 2', () => {
      assert.deepStrictEqual(sumOfOther([8, 63, 49, 63, 65, 100, 101, 63]), [
        504,
        449,
        463,
        449,
        447,
        412,
        411,
        449,
      ]);
    });
    it('test 3', () => {
      assert.deepStrictEqual(sumOfOther([89, 73, 34, 5]), [112, 128, 167, 196]);
    });
    it('test 4', () => {
      assert.deepStrictEqual(sumOfOther([1, 8, 7, 10, 90, 45]), [
        160,
        153,
        154,
        151,
        71,
        116,
      ]);
    });
    it('test 5', () => {
      assert.deepStrictEqual(sumOfOther([9999, 100000, 59, 1]), [
        100060,
        10059,
        110000,
        110058,
      ]);
    });
  });
  describe('make', () => {
    function sum(a, b) {
      return a + b;
    }
    it('test 1', () => {
      assert.strictEqual(make(15)(34, 21, 666)(41)(sum), 777);
    });
    it('test 2', () => {
      assert.strictEqual(make(34, 27)(16)(51, 80)(sum), 208);
    });
    it('test 3', () => {
      assert.strictEqual(make(80, 15, 29, 61)(30, 90, 500)(sum), 805);
    });
    it('test 4', () => {
      assert.strictEqual(make(10)(20)(30)(40)(50)(sum), 150);
    });
    it('test 5', () => {
      assert.strictEqual(make(94, 50)(628)(710)(325, 501)(sum), 2308);
    });
  });
});
