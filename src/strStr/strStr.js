// https://leetcode.com/problems/implement-strstr/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {};

// talk about input validation first
// 1. If needle = "" mention the problematic coercion 0 == ""
// 2. if needle.length > haystack.length don't check

// simplest solution
// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);
// };

// brute force complexity m*n
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;

  if (needle == '') return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        const element = needle[j];
      }
    }
  }
};

// console.log(strStr('mississippi', 'issip'));
