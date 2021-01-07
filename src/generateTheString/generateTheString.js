//https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/submissions/
/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = function (n) {
  let array = new Array(n);
  let res;
  if (n % 2 == 0) res = array.fill('a', 0).fill('b', n - 1);
  else res = array.fill('a');
  return res.join('');
};

module.exports = generateTheString;
