function sumOfAllEvenNumbers(nums) {
  let countOfAllEvenNumbers = nums.filter((value) => value % 2 === 0).length;
  return countOfAllEvenNumbers;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
