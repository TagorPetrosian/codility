function solution(S) {
  const len = S.split('').length;
  const stack = [];

  for (let i = 0; i < len; i++) {
    const ch = S.charAt(i);
    if (isOpening(ch)) stack.unshift(matching(ch));
    else if (isClosing(ch) && stack[0] === ch) stack.shift();
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

let S = '';

for (let i = 0; i < 100000; i++) {
  S += '(';
}

for (let i = 0; i < 100000; i++) {
  S += ')';
}

console.time();
console.log(solution(S));
console.timeEnd();
