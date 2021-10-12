/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  let stack = [];
  for (let index = 0; index < s.length; index++) {
    let char = s.charAt(index);
    if (isOpening(char)) stack.push(matching(char));
    else if (isClosing(char) && char === stack[0]) stack.pop();
    else return false;
  }
  return stack.length === 0;
}

function isOpening(ch) {
  return /[[{(<]/.test(ch);
}

function isClosing(ch) {
  return /[\]})>]/.test(ch);
}

function matching(ch) {
  switch (ch) {
    case '[':
      return ']';
      break;
    case '(':
      return ')';
      break;
    case '{':
      return '}';
      break;
    case '<':
      return '>';
      break;
  }
}

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
