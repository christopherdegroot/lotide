const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

  
  // TEST CODE middle function

  let testArray = [1, 2, 3, 4, 5];
  console.log(middle(testArray));

// testing middle function with assertArraysEqual

assertArraysEqual(middle(testArray), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]