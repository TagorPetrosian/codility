/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  return nums.map((num, index, array) => array[array[index]]);
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
// input: [0,2,1,5,3,4]
// output [0,1] num[num[0]], [num[num[1]]]
