/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const version1Arr = version1.split('.');
  const version2Arr = version2.split('.');

  const smallestLen = Math.min(version1Arr.length, version2Arr.length);

  for (let i = 0; i < smallestLen; i++) {
    const currV1 = parseInt(version1Arr[i]);
    const currV2 = parseInt(version2Arr[i]);

    if (currV1 < currV2) return -1;
    else if (currV1 > currV2) return 1;
  }

  // get rid of trailing zeros
  while (parseInt(version1Arr.at(-1)) === 0) version1Arr.pop();
  while (parseInt(version2Arr.at(-1)) === 0) version2Arr.pop();

  //tails
  if (version1Arr.length > version2Arr.length) return 1;
  else if (version1Arr.length < version2Arr.length) return -1;
  else return 0;
};
console.log(
  compareVersion(
    '19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.00.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000',
    '19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000'
  )
);
