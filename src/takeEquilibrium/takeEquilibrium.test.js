const solution = require('./takeEquilibrium');

describe('takeEquilibrium', () => {
  test('example from codility', () => {
    expect(solution([3,1,2,4,3])).toBe(1);
  });

  test('two element case', () => {
    expect(solution([-1000,1000])).toBe(2000);
  });
});
