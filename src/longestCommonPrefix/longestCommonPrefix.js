/**
 * @param {string[]} strs
 * @return {string}
 */
//brute force solution
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let shortest = strs[0];
  let common = '';
  for (const str of strs) {
    if (str.length < shortest.length) shortest = str;
  }
  //complexity O(m + n) as n is the max str length and m is strs length
  for (let i = 0; i < shortest.length; i++) {
    for (const str of strs) {
      if (str.charAt(i) !== shortest.charAt(i)) return common;
    }
    common += shortest.charAt(i);
  }

  return common;
};

// var longestCommonPrefix = function (strs) {};

module.exports = longestCommonPrefix;
