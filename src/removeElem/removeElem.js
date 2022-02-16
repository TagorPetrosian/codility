/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const { length } = nums;
  let writeIndex = 0;
  if (length < 2 && nums[0] === val) {
    nums.splice(0, 1);
    return writeIndex;
  }
  for (let i = 0; i < length; ) {
    if (nums[i] === val) {
      i++;
    } else {
      [nums[i], nums[writeIndex]] = [nums[writeIndex], nums[i]];
      i++;
      writeIndex++;
    }
  }
  return writeIndex;
};
console.log(removeElement([1], 1));
console.log(removeElement([3, 2, 2, 3, 2], 2));

console.log(removeElement([2, 2, 2, 2, 3, 3, 4, 3], 2));
