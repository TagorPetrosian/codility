const solution = require('./frogRiverOne');

describe('frogRiverOne', () => {
  test('basic example', () => {
    expect(solution(5, [1,3,1,4,2,3,5,4])).toBe(6);
  });

  test('no solution', () => {
    expect(solution(2, [2,2,2,2])).toBe(-1);
  });
});
