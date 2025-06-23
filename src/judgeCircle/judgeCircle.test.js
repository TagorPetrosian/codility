const judgeCircle = require('./judgeCircle');

describe('judgeCircle', () => {
  test('returns true for balanced moves', () => {
    expect(judgeCircle('UD')).toBe(true);
  });

  test('returns false for unbalanced moves', () => {
    expect(judgeCircle('UUD')).toBe(false);
  });

  test('empty moves string', () => {
    expect(judgeCircle('')).toBe(true);
  });
});
