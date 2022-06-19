/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const map = mapAlphabet(order);

  outer: for (let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i];
    const nextWord = words[i + 1];
    const minLen = Math.min(currentWord.length, nextWord.length);

    inner: for (let j = 0; j <= minLen; j++) {
      let orderAtCurrent = map.get(currentWord.charAt(j));
      let orderAtNext = map.get(nextWord?.charAt(j)) ?? -Infinity;
      if (orderAtCurrent < orderAtNext) break outer;
      else if (orderAtCurrent > orderAtNext) return false;
    }
  }

  return true;
};

/**
 * @param {string} order
 * @return {Map}
 */
function mapAlphabet(order) {
  return order.split('').reduce((map, char, index) => {
    map.set(char, index);
    return map;
  }, new Map());
}
const words = ['apple', 'app'];
const order = 'abcdefghijklmnopqrstuvwxyz';
console.log('isAlienSorted', isAlienSorted(words, order));

// ["fxasxpc","dfbdrifhp","nwzgs","cmwqriv","ebulyfyve","miracx","sxckdwzv","dtijzluhts","wwbmnge","qmjwymmyox"]
// "zkgwaverfimqxbnctdplsjyohu"
// https://leetcode.com/problems/verifying-an-alien-dictionary/submissions/
