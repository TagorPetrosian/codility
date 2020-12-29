/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reversed = x.toString().split('').reverse().join('');
  return Number.parseInt(reversed) === x;
};

// var isPalindrome = function (x) {
//   const numToArray = x.toString().split('');
//   const len = numToArray.length;
//   let res = true;
//   for (let i = 0; i < len; i++) {
//     if (numToArray[i] !== numToArray[len + i - 1]) {
//       res = false;
//       break;
//     }
//   }

//   return res;
// };

console.log(isPalindrome(434));
