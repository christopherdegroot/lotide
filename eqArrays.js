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
      // if the element is NOT an array and the items are NOT equal then iot will return false
      return false;
    }
  } 
  return true;
};

module.exports = eqArrays;