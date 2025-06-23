const solution = require('./triangle');

describe('triangle', () => {
  test('positive case', () => {
    expect(solution([10,2,5,1,8,20])).toBe(1);
  });

  test('negative case', () => {
    expect(solution([10,50,5,1])).toBe(0);
  });
});
