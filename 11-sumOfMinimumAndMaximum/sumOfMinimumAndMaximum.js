function sumOfMinimumAndMaximum(nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
