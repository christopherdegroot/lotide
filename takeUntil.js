
const takeUntil = function(array, callback) {
  const results = [];

  for (let item of array) {
    if (callback(item) === false) {
      results.push(item);
    } else return results;
  }
return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

assertArraysEqual(results1,  [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood']);