const eventDigits = require('./findEvenDigits');
// import { flipAndInvertImage } from './flippingImage';
//[[1,1,0],[1,0,1],[0,0,0]]
//[[1,0,0],[0,1,0],[1,1,1]]
test('even number should be', () => {
  expect(eventDigits([12, 345, 2, 6, 7896])).toEqual(2);

  expect(eventDigits([555, 901, 482, 1771])).toEqual(1);
});
