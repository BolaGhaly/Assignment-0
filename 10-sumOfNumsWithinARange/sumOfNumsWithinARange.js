function sumOfNumsWithinARange(nums, start, end) {
  let countOfNumsWithinARange = nums.filter((value) => (start <= value && value <= end)).length;
  return countOfNumsWithinARange;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
