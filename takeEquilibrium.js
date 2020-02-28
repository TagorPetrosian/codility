function solution(A) {
  let minDif;
  let left = A[0];
  let right = 0;

  for (let i = 1; i < A.length; i++) {
    right += A[i];
  }

  minDif = Math.abs(left - right);

  for (let i = 1; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];
    minDif = Math.min(minDif, Math.abs(left - right));
  }

  return minDif;
}

console.log(solution([-1000, 1000]));
