/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  for (let i = nums.length - 3; i >= 0; i--) {
    nums[i] += Math.max(nums[i + 3], nums[i + 2]) || nums[i + 2];
  }
  return Math.max(nums[0], nums[1]) || nums[0];
};

console.log(rob([2, 1, 1, 2]));
