const tail = require('../tail');
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;
const { italic } = require('ansi-colors');


describe("#tail", () => {

  it('tail(["Hello", "Lighthouse", "Labs"]) should return ["Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});
