/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const mapS1 = new Map();
  const slidingWindow = new Map();

  s1.split('').forEach((char, index) => {
    let charS1Count = mapS1.get(char) ?? 0;
    mapS1.set(char, ++charS1Count);

    let charS2 = s2.charAt(index);
    let charS2Count = slidingWindow.get(charS2) ?? 0;
    slidingWindow.set(charS2, ++charS2Count);
  });

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (isEqual(mapS1, slidingWindow)) return true;

    let removedChar = s2.charAt(i);
    let addedChar = s2.charAt(i + s1.length);
    let removedCharCount = slidingWindow.get(removedChar);
    let addedCharCount = slidingWindow.get(addedChar) ?? 0;

    if (removedChar == addedChar) --addedCharCount;
    slidingWindow.set(removedChar, --removedCharCount);
    slidingWindow.set(addedChar, ++addedCharCount);
  }

  if (isEqual(mapS1, slidingWindow)) return true;
  else return false;
};

function isEqual(map1, map2) {
  // 0(26) = O(1)
  for (const [key, value] of map1.entries()) {
    if (map2.get(key) != value) return false;
  }
  return true;
}

console.log(checkInclusion('abc', 'cccccbabbbaaaa'));
