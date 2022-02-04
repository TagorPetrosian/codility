/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return climbStairsMemoized(n, [0, 1, 2]);
};

const climbStairsMemoized = function (n, cache) {
  if (cache[n]) return cache[n];
  else return (cache[n] = climbStairsMemoized(n - 1, cache) + climbStairsMemoized(n - 2, cache));
};

console.log(climbStairs(2));
