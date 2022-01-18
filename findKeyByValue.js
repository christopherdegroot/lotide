const assertEqual = require('./assertEqual');

const findKeyByValue = function(objectInput, keyCheck) {
  objectKeys = Object.keys(objectInput);

  for (const individualKey of objectKeys) {
    if (objectInput[individualKey] === keyCheck) {
      return individualKey
    }
    
  }
};



// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;