const diagonalSum = require('./matrixDiagonalSum');

test('string should have odd amount of chars', () => {
  expect(
    diagonalSum([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toEqual(25);
});
