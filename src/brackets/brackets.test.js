const solution = require('./brackets');

describe('brackets solution', () => {
  test('balanced simple case', () => {
    expect(solution('()')).toBe(1);
  });

  test('unbalanced simple case', () => {
    expect(solution('([)]')).toBe(0);
  });

  test('empty string', () => {
    expect(solution('')).toBe(1);
  });
});
