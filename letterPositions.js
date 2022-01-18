const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    if (letter === ' ') {
      continue;
    }

    if (!results[letter]) {
      results[letter] = [i];
      continue;
    }


    if (results[letter]) {
      results[letter].push(i);
    }
  }
  return results;
};


// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;