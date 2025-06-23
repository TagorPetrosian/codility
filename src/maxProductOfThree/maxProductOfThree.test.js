const solution = require('./maxProductOfThree');

describe('maxProductOfThree', () => {
  test('example', () => {
    expect(solution([-3,1,2,-2,5,6])).toBe(60);
  });

  test('all negatives', () => {
    expect(solution([-5,-6,-4,-7,-10])).toBe(-120);
  });
});
