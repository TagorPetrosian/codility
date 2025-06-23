const permMissing = require('./permMissing');

describe('permMissing', () => {
  test('missing 5 from [2,3,1,5]', () => {
    expect(permMissing([2,3,1,5])).toBe(4);
  });

  test('single element array', () => {
    expect(permMissing([2])).toBe(1);
  });
});
