const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

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

//console.log(countLetters('lighthouse in the house'));

//assertArraysEqual(({ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }), (countLetters(('lighthouse in the house'))));

module.exports = countLetters;