const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

 describe("assertEqual", () => {

  it("should return false if inputted 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false)
  });

  it("should return true if inputted '1' and '1'", () => {
    assert.strictEqual(assertEqual("1", "1"), true)
  });

  it("should return false if inputted 'shoes' and 'socks'", () => {
    assert.strictEqual(assertEqual("shoes", "socks"), false)
  });

  it("should return true if inputted 'Shoes', 'Shoes'", () => {
    assert.strictEqual(assertEqual('Shoes', 'Shoes'), true)
  });

  it("should return false if inputted '3', '4'", () => {
    assert.strictEqual(assertEqual('3', '4'), false)
  });

 });
