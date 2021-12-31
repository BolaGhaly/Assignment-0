function sumOfAllOddNumbers(nums) {
    let countOfAllOddNumbers = nums.filter((value) => value % 2 !== 0).length;
    return countOfAllOddNumbers;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;