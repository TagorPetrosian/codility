const solution = require('./passingCars');

describe('passingCars', () => {
  test('example', () => {
    expect(solution([0,1,0,1,1])).toBe(5);
  });

  test('limit exceeded', () => {
    expect(solution(new Array(100000).fill(0).concat(new Array(100000).fill(1)))).toBe(-1);
  });
});
