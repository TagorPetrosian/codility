/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  nums.unshift(...nums.splice(-k % nums.length));
  return nums;
};
1, 2, 3, 4, 5, 6, 7;
console.log(rotate([-1, -100, 3, 99], 2));
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
