const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// without function
const without = function(source, itemsToRemove) {
  let newArray = [];


  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArray.push(source[i]);
    }
    
  }
  return newArray;
};

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


// this function should take in a source array and a itemsToRemove Array

// it should return a new array with only those elements from source that are not present in the itemsToRemove array

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;