// assertArrayEqual.js function
const assertArraysEqual = function(array1, array2) {
  let arraystring1 = '';
  let arraystring2 = '';
  
  for (let i = 0; i < array1.length; i++) {
    arraystring1 += array1[i];
    
  }
  
  for (let i = 0; i < array2.length; i++) {
    arraystring2 += array2[i];
    
  }
    
  if (arraystring1 === arraystring2) {
    console.log(`✔✔✔ Assertion Passed: ' ${array1}  === ${array2}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
};
  

// eqArrays.js function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ' ${actual}  === ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {
  
  if (array1 === array1) {
    trueOrFalse = true;
  } else trueOrFalse = false;

  return trueOrFalse;
};


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

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


// this function should take in a source array and a itemsToRemove Array

// it should return a new array with only those elements from source that are not present in the itemsToRemove array

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);