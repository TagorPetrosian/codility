/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let originalColor = image[sr][sc];
  fill(image, sr, sc, newColor, originalColor);
  return image;
};

function fill(image, r, c, newColor, originalColor) {
  if (
    r >= image.length ||
    r < 0 ||
    c >= image[0].length ||
    c < 0 ||
    image[r][c] == newColor ||
    image[r][c] != originalColor
  ) {
    return;
  }

  image[r][c] = newColor;
  // top
  fill(image, r - 1, c, newColor, originalColor);
  // bottom
  fill(image, r + 1, c, newColor, originalColor);
  // left
  fill(image, r, c - 1, newColor, originalColor);
  // right
  fill(image, r, c + 1, newColor, originalColor);
}

// Input: [[1,1,1],[1,1,0],[1,0,1]] , sr = 1, sc = 1, newColor = 2;
// Output : [[2,2,2],[2,2,0],[2,0,1]]
