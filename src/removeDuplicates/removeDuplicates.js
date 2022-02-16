// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = function (nums) {
  const { length } = nums;
  if (length < 2) return length;
  let writeIndex = 0;
  for (let i = 0; i < length; ) {
    if (nums[i] === nums[i + 1]) {
      i++;
    } else {
      [nums[i], nums[writeIndex]] = [nums[writeIndex], nums[i]];
      i++;
      writeIndex++;
    }
  }
  return writeIndex;
};

console.log(removeDuplicates([1, 1, 1, 1, 2]));
console.log(removeDuplicates([1, 1, 2, 3, 3]));
