// assertEquals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
  console.log(`✔✔✔ Assertion Passed: ' ${actual}  === ${expected}`);
} else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// ---------------------------------------------------------------------------------------------- //
// takes in an object and a value
// scan the object
// return the first key which contains the given value
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(objectInput, keyCheck) {
  objectKeys = Object.keys(objectInput);

  for (const individualKey of objectKeys) {
    if (objectInput[individualKey] === keyCheck) {
      return individualKey
    }
    
  }
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);