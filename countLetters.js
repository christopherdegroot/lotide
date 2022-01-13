// assertEquals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
  console.log(`✔✔✔ Assertion Passed: ' ${actual}  === ${expected}`);
} else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//// assertArraysEqual
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

const countLetters = function (string) {
  const results = {}
  
  for (const letter of string) {
  
    if (letter !== ' ') {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
}
  return results;
};

console.log(countLetters('lighthouse in the house'));



assertArraysEqual(({ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }), (countLetters(('lighthouse in the house'))));