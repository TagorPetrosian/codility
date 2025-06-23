function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  const xBin = dec2bin(x)
    .split('')
    .map((num) => Number(num));
  const yBin = dec2bin(y)
    .split('')
    .map((num) => Number(num));

  const longest = Math.max(xBin, yBin);
  const shortest = Math.min(xBin, yBin);

  const different = 0;
  for (let i = 0; i < shortest; i++) {
    if (xBin[i] !== yBin[i]) different++;
  }

  return different;
};

module.exports = hammingDistance;
