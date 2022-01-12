// eqArrays function
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

// // TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
// assertEqual(eqArrays([1, 2, 2], [1, 2, 2]), true);
// assertEqual(eqArrays([1, 2, 8], [1, 2, 4]), false);

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


  //TEST CODE
  // assertArraysEqual([1, 2, 3], [1, 2, 3]);
  // assertArraysEqual([1, 2, 3], [1, 2, 4]);

//------------------------------------------------------------------------------------------------------//

  // middle function
const middle = function(array) {
  middleArray = [];
  //console.log('logging first instance of middleArray', middleArray);

  for (let i = 0; i < array.length; i++) {

      // empty array with only 1 or two elements 
  if (array.length > 2) {

    // only the middle elements of the provided array
    const startingPoint = (array.length - 1 )/ 2;
    //console.log('logging starting point:', Math.floor(startingPoint));
    const middleArrayStartingPoint =  Math.floor(startingPoint);

    if (array.length % 2 === 0) {
      // console.log('array length is even!')
      middleArray.push(array[middleArrayStartingPoint]);
      middleArray.push(array[middleArrayStartingPoint +1]);
      // console.log('middleArrayStartingPoint', middleArrayStartingPoint);

  } else middleArray.push(array[middleArrayStartingPoint]);

 
  }
 return middleArray;
  
  // odd return single, even return 2
  
  }
  
};
  // TEST CODE middle function

  let testArray = [1, 2, 3, 4, 5];
  console.log(middle(testArray));

// testing middle function with assertArraysEqual

assertArraysEqual(middle(testArray), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]