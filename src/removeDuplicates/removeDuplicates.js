// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length < 2) return nums.length;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] > nums[i]) {
      nums[i + 1] = nums[j];
    }
    i++;
  }
  console.log(nums);
  return i++;
};

console.log(removeDuplicates([1, 1, 2]));
