const lcp = require('./longestCommonPrefix');

describe('longestCommonPrefix', () => {
  test('flower example', () => {
    expect(lcp(['flower','flow','flight'])).toBe('fl');
  });

  test('no common prefix', () => {
    expect(lcp(['dog','racecar','car'])).toBe('');
  });
});
