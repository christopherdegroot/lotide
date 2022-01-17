// eqArrays
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
      // if the element is NOT an array and the items are NOT equal then it will return false
      return false;
    }
  } 
  return true;
};

// eqObjects function
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

// assertObjectsEqual function

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual,expected) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`)
  } else if (eqObjects(actual,expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  }
}

assertObjectsEqual({a:1,b:2},{a:1,b:2})