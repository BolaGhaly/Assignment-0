function countOfAllNumbersSmallerThanTarget(nums, target) {
  let countOfNumbersSmallerThanTarget = nums.filter(
    (value) => value < target
  ).length;
  return countOfNumbersSmallerThanTarget;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
