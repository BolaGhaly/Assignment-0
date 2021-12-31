class MySolution {
  binarySearch(nums, target) {
    var length = nums.length;
    var midPoint = Math.floor(length / 2);
    var newArr = nums;
    if (nums[midPoint] > target) {
      var newArr = nums.slice(0, midPoint);
      return this.binarySearch(newArr, target);
    } else if (nums[midPoint] < target) {
      var newArr = nums.slice(midPoint + 1, nums.length);
      return this.binarySearch(newArr, target);
    } else if (nums[midPoint] === target) {
      return true;
    } else if (nums[midPoint] !== target) {
      return false;
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
