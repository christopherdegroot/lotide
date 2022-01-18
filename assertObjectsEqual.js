const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual,expected) === false) {
    return false;

  } else if (eqObjects(actual,expected) === true) {
    return true;
  }
}

// assertObjectsEqual({a:1,b:2},{a:1,b:2})

module.exports = assertObjectsEqual;