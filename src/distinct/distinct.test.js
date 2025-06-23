const solution = require('./distinct');

describe('distinct', () => {
  test('counts unique values', () => {
    expect(solution([2,1,1,2,3,1])).toBe(3);
  });

  test('single element', () => {
    expect(solution([1])).toBe(1);
  });
});
