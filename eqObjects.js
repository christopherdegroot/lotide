// assertEquals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
  console.log(`✔✔✔ Assertion Passed: ' ${actual}  === ${expected}`);
} else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// ---------------------------------------------------------------------------------------//

// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object


const eqObjects = function(object1, object2) {
  object1Keys = Object.keys(object1);
  object2Keys = Object.keys(object2);
  

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {
   if (object1[key] !== object2[key]) {
     return false;
   }
  }

 return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// eqArrays function

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      // if array is an array (true) && the arrays are not equal then will return false;
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      // if the element is NOT an array and the items are NOT equal then iot will return false
      return false;
    }
  } 
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqArrays(cd,dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqArrays(cd, cd2),true); // => false



