/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0;
  let y = 0;

  for (move of moves) {
    if (move === 'U') y++;
    if (move === 'D') y--;
    if (move === 'L') x--;
    if (move === 'R') x++;
  }
  return x === 0 && y === 0;
};

module.exports = judgeCircle;
