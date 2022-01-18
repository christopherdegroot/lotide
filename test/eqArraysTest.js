const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

describe("#eqArrays", () => {

  it("should return true if inputted [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("eqArrays([1, 2, 3], [3, 2, 1]) // => false", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it('eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });



});
