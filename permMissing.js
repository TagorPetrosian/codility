function solution(A) {
  const sum = parseInt(((1 + A.length + 1) / 2) * (A.length + 1)); //gausian sum (a1 + an) / 2 * n
  let total = 0;

  for (let i = 0; i < A.length; i++) {
    total += A[i];
  }

  return sum - total;
}
