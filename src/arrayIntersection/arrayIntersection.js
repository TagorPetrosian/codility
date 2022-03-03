/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map1 = new Map();
  const map2 = new Map();

  nums1.forEach((num) => {
    if (!map1.has(num)) map1.set(num, 1);
  });

  nums2.forEach((num) => {
    if (!map2.has(num)) map2.set(num, 1);
  });

  const mergedPairs = [...map1.entries(), ...map2.entries()];
  console.log(mergedPairs);
  const intersectedPairs = mergedPairs.reduce((map, [num, count]) => {
    if (!map.has(num)) map.set(num, count);
    else {
      let count = map.get(num);
      map.set(num, ++count);
    }
    return map;
  }, new Map());

  return [...intersectedPairs.entries()].reduce((intersection, [num, count]) => {
    if (count > 1) intersection.push(num);
    return intersection;
  }, []);
};

var intersection = function (nums1, nums2) {
  nums1 = new Set(nums1);
  // Delete returns true if successfully deleted element otherwise false
  return nums2.filter((num) => nums1.delete(num));
  // We have to remove the element from the original set otherwise it would match multiple times and we only want the elem a single time
};

// [4,7,9,7,6,7]
// [5, 0, 0, 6, 1, 6, 2, 2, 4];
console.log(intersection([1, 2, 2, 1], [2, 2]));

// more logical algebra on arrays
// 1. intersection (A&B)
// 2. inclusion A in B
// 3. union | A or B| = |A| + |B| - |A & B|
// 4. complementary
// 5. xor (A xor B) = |A| + |B|  - 2|A& B|

// O(n)
function includes(arr1, arr2) {
  const merged = new Set(...arr1, ...arr2);

  return new Set(...arr1).size === merged.size || new Set(...arr2) === merged.size;
}

function union(arr1, arr2) {
  return new Set(...arr1, arr2);
}

function xor(arr1, arr2) {
  nums1 = new Set(arr1);
  nums2 = new Set(arr2);
  // Delete returns true if successfully deleted element otherwise false
  return [...arr2.filter((num) => !nums1.delete(num)), ...arr1.filter((num) => !nums2.delete(num))];
}

console.log(xor([1, 2, 3], [3, 4, 5]));
