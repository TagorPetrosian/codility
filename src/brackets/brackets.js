function solution(S) {
  const len = S.split('').length;
  const stack = [];

  for (let i = 0; i < len; i++) {
    const ch = S.charAt(i);
    if (isOpening(ch)) stack.push(matching(ch));
    else if (isClosing(ch) && stack[stack.length - 1] === ch) stack.pop();
    else return 0;
  }

  if (stack.length === 0) return 1;
  return 0;
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

module.exports = solution;
