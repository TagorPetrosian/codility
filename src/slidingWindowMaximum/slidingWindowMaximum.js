/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const { length } = nums;
  let windowSum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  max = windowSum;

  for (let i = k; i < length; i++) {
    windowSum -= nums[i - k];
    windowSum += nums[k];

    max = Math.max(max, windowSum);
  }

  return max;
};

console.log('windowSum', maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
