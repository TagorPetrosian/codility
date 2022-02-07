/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const { length } = cost;
  return Math.min(minCost(cost, length - 1), minCost(cost, length - 2));
};

function minCost(cost, n) {
  if (n < 0) return 0;
  else if ((n == 1) | (n == 0)) return cost[n];
  else return cost[n] + Math.min(minCost(cost, n - 1), minCost(cost, n - 2));
}

var minCostClimbingStairs = function (cost) {
  for (let i = cost.length - 3; ~i; i--) cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  return Math.min(cost[0], cost[1]);
};
console.log(minCostClimbingStairs([10, 15, 20]));
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
