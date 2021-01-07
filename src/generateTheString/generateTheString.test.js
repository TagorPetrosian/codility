const generateTheString = require('./generateTheString');

test('string should have odd amount of chars', () => {
  expect(generateTheString(4)).toEqual('aaab');

  expect(generateTheString(3)).toEqual('aaa');
});
