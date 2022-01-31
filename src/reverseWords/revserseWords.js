/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
};

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

//

console.log(reverseWords("Let's take LeetCode contest"));
