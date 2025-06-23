const frogJump = require('./frogJump');

describe('frogJump', () => {
  test('basic example', () => {
    expect(frogJump(10, 85, 30)).toBe(3);
  });

  test('exact jump', () => {
    expect(frogJump(10, 70, 30)).toBe(2);
  });
});
