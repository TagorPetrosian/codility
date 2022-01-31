/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
  const map = new Map();
  let res;

  numbers.forEach((num, index) => {
    const diff = target - num;
    const complementaryIndex = map.get(diff);

    if (complementaryIndex == null) {
      map.set(num, index);
    } else {
      res = [complementaryIndex + 1, index + 1];
    }
  });
  return res;
};
// [2,7,11,15]
// {
//   2: 0,
//   7: 1,
//   -2: 2,
//   -6: 3
// }

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

console.log(twoSum([2, 7, 11, 15], 9));
