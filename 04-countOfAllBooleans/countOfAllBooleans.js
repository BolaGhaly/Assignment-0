function countOfAllBooleans(arr) {
  let booleansCount = arr.filter(value => value === true || value === false).length;
  return booleansCount;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
