const assert = require('assert');
const sumOfOther = require('../sumOfOther');

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
});
