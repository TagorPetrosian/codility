/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      [nums[i], nums[lastZero]] = [nums[lastZero], nums[i]];
      lastZero++;
    }
  }

  return nums;
};

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
console.log(moveZeroes([0, 1, 0, 3, 12]));
