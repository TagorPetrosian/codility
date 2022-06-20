/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  let totalSum = nums.reduce((prev, curr) => (prev += curr));
  console.log('totalSum:', totalSum);
  let left = 0;
  let right = totalSum - nums[0];

  for (let index = 0; index < nums.length; index++) {
    if (left === right) return index;
    left += nums[index];
    right -= nums?.[index + 1];
  }
  return -1;
};

console.log('pivotIndex', pivotIndex([1, 7, 3, 6, 5, 6]));
