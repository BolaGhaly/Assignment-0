function countOfAllIndexMatchingNumbers(nums) {
  let countOfIndexMatchingNumbers = 0;
  for (let i=0; i < nums.length; i++) {
    if (nums[i] === i) {
      countOfIndexMatchingNumbers++;
    }
  }
  return countOfIndexMatchingNumbers;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
