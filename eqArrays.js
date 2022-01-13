// eqArrays
const assertEqual = function(actual, expected) {
  if (actual === expected) {
  console.log(`✔✔✔ Assertion Passed: ' ${actual}  === ${expected}`);
} else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (array1, array2) {
  
  if (array1 === array1) {
     trueOrFalse = true;
  } else trueOrFalse = false;

  return trueOrFalse;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, 2], [1, 2, 2]), true);
assertEqual(eqArrays([1, 2, 8], [1, 2, 4]), false);