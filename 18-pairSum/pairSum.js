function pairSum(nums, target) {
  if (nums.length <= 1) {
    throw "Error, the length of 'nums' array is 1 or lower";
  } else if (nums.length >= 2) {
    for (i = 0; i < nums.length - 1; i++) {
      for (j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return true;
        }
      }
    }
    return false;
  }
}

// Do not edit this line;
module.exports = pairSum;
