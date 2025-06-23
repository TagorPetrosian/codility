const dist = require('./hammingDistance');

describe('hammingDistance', () => {
  test('basic case', () => {
    expect(dist(1, 4)).toBe(2);
  });

  test('same numbers', () => {
    expect(dist(0, 0)).toBe(0);
  });
});
