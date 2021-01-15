// https://leetcode.com/problems/matrix-diagonal-sum/
/**
 * @param {number[][]} mat
 * @return {number}
 */
// const diagonalSum = function (mat) {
//   let sum = 0;
//   for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat.length; j++) {
//       if (i === j) sum += mat[i][j];
//       else if (i + j === mat.length - 1) sum += mat[i][j];
//     }
//   }
//   return sum;
// };

const diagonalSum = function (mat) {
  let sum = 0;

  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];

    if (i !== mat[i].length - i - 1) {
      sum += mat[i][mat[i].length - i - 1];
    }
  }

  return sum;
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

module.exports = diagonalSum;

console.log(diagonalSum(mat));
