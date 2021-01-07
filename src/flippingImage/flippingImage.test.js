const flipAndInvertImage = require('./flippingImage');
// import { flipAndInvertImage } from './flippingImage';
//[[1,1,0],[1,0,1],[0,0,0]]
//[[1,0,0],[0,1,0],[1,1,1]]
test('Image should be flipped and inverted', () => {
  expect(
    flipAndInvertImage([
      [1, 1, 0],
      [1, 0, 1],
      [0, 0, 0],
    ])
  ).toEqual([
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ]);
});
