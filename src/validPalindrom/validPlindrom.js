/**
 * @param {string} s
 * @return {boolean}
 */

// https://leetcode.com/problems/valid-palindrome/
// 1. convert to lowercase
// 2.remove non-alphanumeric
var isPalindrome = function (s) {
  const sanitized = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reversed = sanitized.split('').reverse().join('');
  return sanitized === reversed;
};

console.log('isPalindrom', isPalindrome('A man, a plan, a canal: Panma'));
