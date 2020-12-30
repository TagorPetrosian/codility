/**
 * @param {number[]} arr
 * @return {number[]}
 */
// var replaceElements = function (arr) {
//   return arr.map((num, index) => {
//     if (index + 1 === arr.length) return -1;
//     else return Math.max(...arr.slice(index + 1));
//   });
// };

// var replaceElements = function (arr) {
//   const original = [...arr];
//   const { length } = arr;
//   let max = arr[length - 1];
//   return arr.reverse().map((num, i) => {
//     if (i === 0) return -1;
//     else if (i === 1) {
//       max = Math.max(original[length - 2], original[length - 1]);
//       return original[length - 1];
//     } else {
//       if (num > max) {
//         max = num;
//         return num;
//       } else {
//         // max = Math.max(max, original[length - 1]);
//         return max;
//       }
//     }
//   });
// };
//[18,6,6,6,1,-1] 6
//[1,6,4,5,18,17] ==> [-1,1,6,6,18,18]
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
