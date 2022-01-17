const tail = function(data) {
  let newArray = [];
  let i = 1;
  while (i < data.length) {
    newArray.push(data[i]);
    i++;
  }
  return newArray;
};

module.exports = tail;