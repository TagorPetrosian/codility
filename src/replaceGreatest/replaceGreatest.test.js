const replace = require('./replaceGreatest');

describe('replaceGreatest', () => {
  test('basic example', () => {
    expect(replace([17,18,5,4,6,1])).toEqual([18,6,6,6,1,-1]);
  });

  test('single element', () => {
    expect(replace([5])).toEqual([-1]);
  });
});
