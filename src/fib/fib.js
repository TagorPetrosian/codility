/**
 * @param {number} n
 * @return {number}
 */
const PHI = (1 + 5 ** 0.5) / 2;
// const fib = function (n) {
//   if (n < 3) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

var fib = function (n) {
  return memoizationFib(n, [0, 1]);
};

function memoizationFib(n, cache) {
  if (n < 2) return cache[n];
  if (cache[n]) return cache[n];

  return (cache[n] = memoizationFib(n - 1, cache) + memoizationFib(n - 2, cache));
}
// with the golden ratio formula
//www.cuemath.com/numbers/fibonacci-sequence/
function fib(n) {
  return Math.floor((PHI ** n - (1 - PHI) ** n) / 5 ** 0.5);
}

console.time('timer');
// console.log(PHI);
console.log(fib(40));
console.timeEnd('timer');
