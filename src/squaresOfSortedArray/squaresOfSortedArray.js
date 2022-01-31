const sortedSquares = function (nums) {
  const negatives = nums
    .filter((num) => num < 0)
    .map((num) => num ** 2)
    .reverse();

  const positives = nums.filter((num) => num >= 0).map((num) => num ** 2);

  console.log({ positives, negatives });
  return mergeSortedArrays(negatives, positives);
};

const mergeSortedArrays = function (arr1, arr2) {
  const res = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i++]);
    } else {
      res.push(arr2[j++]);
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i++]);
  }
  while (j < arr2.length) {
    res.push(arr2[j++]);
  }
  return res;
};

// [16, 1] [0, 9, 100]
console.log(sortedSquares([-2, 0]));
