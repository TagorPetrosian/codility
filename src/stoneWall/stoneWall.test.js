const solution = require('./stoneWall');

describe('stoneWall', () => {
  test('example', () => {
    expect(solution([8,8,5,7,9,8,7,4,8])).toBe(7);
  });

  test('flat wall', () => {
    expect(solution([1,1,1])).toBe(1);
  });
});
