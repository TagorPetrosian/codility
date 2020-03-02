function solution(A, B) {
  let alive = 0;
  const swimming = [];
  for (let i = 0; i < A.length; i++) {
    if (B[i] === 0) {
      while (swimming.length !== 0) {
        if (swimming[swimming.length - 1] > A[i]) break;
        else swimming.pop();
      }
      if (swimming.length === 0) alive++;
    } else {
      swimming.push(A[i]);
    }
  }

  return alive + swimming.length;
}

console.log(solution([0, 1], [1, 1]));
