const diagonalSum = require('./matrixDiagonalSum');

test('matrix diagonal sum should be', () => {
  expect(
    diagonalSum([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toEqual(25);
});
