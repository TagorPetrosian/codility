function between(x, min, max) {
  return x >= min && x <= max;
}

function solution(A) {
  const seen = new Array(A.length).fill(false);

  for (let value of A) {
    if (seen[value - 1]) return 0;
    if (!between(value - 1, 0, A.length - 1)) return 0;
    seen[value - 1] = true;
  }
  return 1;
}
module.exports = solution;
