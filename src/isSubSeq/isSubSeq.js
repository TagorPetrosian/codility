/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  const strIterator = s[Symbol.iterator]();
  let curr = strIterator.next()?.value;
  for (let i = 0; i < t.length; i++) {
    if (curr && curr === t.charAt(i)) {
      curr = strIterator.next()?.value;
    }
  }
  return curr ? false : true;
};

console.log('is subs: ', isSubsequence('abc', 'ahbgdc'));

// console.log('is subs: ', isSubsequence('axc', 'ahbgdc'));
