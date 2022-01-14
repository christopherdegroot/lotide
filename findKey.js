// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
  console.log(`✔✔✔ Assertion Passed: ' ${actual}  === ${expected}`);
} else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// ------------------------------------------------------------------- // 

const findKey = function(object, callback) {
  let result = '';

  for (let value in object) {

    if (callback(object[value])) {
      result += value;
      return result;
    }
  }
}


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
 }, x => x.stars === 2), 'noma') // => "noma"
