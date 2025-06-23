const isPalindrome = require('./palindrome');

describe('isPalindrome', () => {
  test('returns true for palindrome number', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test('returns false for non-palindrome', () => {
    expect(isPalindrome(123)).toBe(false);
  });
});
