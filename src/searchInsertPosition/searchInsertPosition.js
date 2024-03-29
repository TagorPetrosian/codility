// www.leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let { length: right } = nums;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

console.log('res', searchInsert([1, 3, 5, 6], 2));
