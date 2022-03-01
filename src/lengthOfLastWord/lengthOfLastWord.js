/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // note .at is supported on latest env on node.js
  return s.trim(' ').split(' ').at(-1).length;
};

console.log(lengthOfLastWord('   fly me   to   the moon  '));
