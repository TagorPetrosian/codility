/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function (A) {
  return A.map((row) => row.map((a) => a ^ 1).reverse()); // a ^ 1 = !a xor flips bit
};

module.exports = flipAndInvertImage;
