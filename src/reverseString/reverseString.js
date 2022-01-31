// var reverseString = function (s) {
//   return s.split('').reverse().join();
// };

// in place
var reverseString = function (s) {
  for (let i = 0; i < s.length; i++) {
    [s[i], s[s.length - (1 + i)]] = [s[s.length - (1 + i)], s[i]];
  }
};
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

const s = 'hello';
console.log(reverseString(s.split('')));
