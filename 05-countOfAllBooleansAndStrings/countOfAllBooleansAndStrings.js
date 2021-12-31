function countOfAllBooleansAndStrings(arr) {
  let booleansAndStringsCount = arr.filter(
    (value) => (value === true || value === false) || typeof value === "string"
  ).length;
  return booleansAndStringsCount;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
