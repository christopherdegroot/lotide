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

  } else middleArray.push(array[Number(middleArrayStartingPoint)]);

 
  }
  // console.log(typeof middleArray);
 return middleArray;
  
  // odd return single, even return 2
  
  }
  
};

module.exports = middle;