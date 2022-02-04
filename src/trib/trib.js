/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  return memoizationFib(n, [0, 1, 1]);
};

function memoizationFib(n, cache) {
  if (n < 3) return cache[n];
  if (cache[n]) return cache[n];

  return (cache[n] = memoizationFib(n - 1, cache) + memoizationFib(n - 2, cache) + memoizationFib(n - 3, cache));
}
