/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  let cache = 0;
  return nums.map((num) => {
    const res = num + cache;
    cache += num;
    return res;
  });
};

console.log('runningSum', runningSum([1, 2, 3, 4]));
