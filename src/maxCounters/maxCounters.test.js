const solution = require('./maxCounters');

describe('maxCounters', () => {
  test('example', () => {
    expect(solution(5, [3,4,4,6,1,4,4])).toEqual([3,2,2,4,2]);
  });

  test('single counter', () => {
    expect(solution(1, [2,1,1,2,1])).toEqual([3]);
  });
});
