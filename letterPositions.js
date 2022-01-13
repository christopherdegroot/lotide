// assertArraysEqual
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
  
// ---------------------------------------------------------------------------------------------//
const letterPositions = function(sentence) {
  const results = {};
  

  for (const letter of sentence) {
  
    if (letter !== ' ') {
      results[letter] = [];
      //results[letter].push('test');
    }

    for (let i = 0; i < sentence.length; i++) {
      if (letter === sentence[i] && results[letter] !== undefined) {
        results[letter].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);