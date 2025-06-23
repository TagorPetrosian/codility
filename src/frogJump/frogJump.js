// function solution(X, Y, D) {
//   let diff = Y - X;
//   if (~~(diff / D) * D + X < Y) return ~~(diff / D) + 1;
//   else return ~~(diff / D);
// }

function solution(X, Y, D) {
  const diff = Y - X;

  let n = parseInt(diff / D);

  if (diff % D) {
    n++;
  }

  return n;
}
module.exports = solution;
