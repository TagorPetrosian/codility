const permCheck = require('./permCheck');

describe('permCheck', () => {
  test('returns 1 for a valid permutation', () => {
    expect(permCheck([4,1,3,2])).toBe(1);
  });

  test('returns 0 for missing element', () => {
    expect(permCheck([4,1,3])).toBe(0);
  });

  test('returns 0 for duplicate', () => {
    expect(permCheck([1,1,2])).toBe(0);
  });
});
