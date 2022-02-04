/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const map = new Map();
  let start = 0;
  let max = 0;
  s.split('').forEach((char, i) => {
    const charIndex = map.get(char);
    if (charIndex != null) {
      start = Math.max(start, charIndex + 1);
    }

    max = Math.max(max, i - start + 1);
    map.set(char, i);
  });

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
