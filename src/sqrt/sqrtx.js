/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // truncated version
  let root;
  for (let i = 0; i * i <= x; i++) {
    root = i;
  }
  return root;
};

console.log(mySqrt(4));
