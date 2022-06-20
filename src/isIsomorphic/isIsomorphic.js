/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const sToTMapping = new Map();
  const tToSMapping = new Map();

  for (let i = 0; i < s.length; i++) {
    const c1 = s.charAt(i);
    const c2 = t.charAt(i);

    if (!sToTMapping.get(c1) && !tToSMapping.get(c2)) {
      sToTMapping.set(c1, c2);
      tToSMapping.set(c2, c1);
    } else if (!(sToTMapping.get(c1) === c2 && tToSMapping.get(c2) === c1)) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic('badc', 'baba'));
