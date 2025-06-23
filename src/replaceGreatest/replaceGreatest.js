function replaceGreatest(arr) {
  const result = new Array(arr.length);
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] = max;
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return result;
}

module.exports = replaceGreatest;
