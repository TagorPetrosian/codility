//leetcode.com/problems/find-numbers-with-even-number-of-digits/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
  return nums.reduce((acc, num) => acc + (num.toString().length % 2 === 0), 0);
};
module.exports = findNumbers;
