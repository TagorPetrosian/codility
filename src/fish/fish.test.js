const solution = require('./fish');

describe('fish', () => {
  test('example from codility', () => {
    expect(solution([4,3,2,1,5], [0,1,0,0,0])).toBe(2);
  });

  test('single fish', () => {
    expect(solution([1], [0])).toBe(1);
  });
});
