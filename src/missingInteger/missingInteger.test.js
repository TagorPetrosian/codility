const solution = require('./missingInteger');

describe('missingInteger', () => {
  test('example', () => {
    expect(solution([1,3,6,4,1,2])).toBe(5);
  });

  test('all negatives', () => {
    expect(solution([-1,-3])).toBe(1);
  });
});
