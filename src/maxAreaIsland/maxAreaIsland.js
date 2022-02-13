const maxAreaOfIsland = (grid) => {
  const dfs = (row, cols, grid) => {
    //Check bounds and zero elements
    if (row < 0 || cols < 0 || row >= grid.length || cols >= grid[row].length) return 0;
    if (grid[row][cols] === 0) return 0;

    //Set visited cells to equal zero
    grid[row][cols] = 0;

    //Traversal calls for four directions
    let top = dfs(row + 1, cols, grid);
    let bottom = dfs(row - 1, cols, grid);
    let right = dfs(row, cols + 1, grid);
    let left = dfs(row, cols - 1, grid);

    return 1 + top + bottom + right + left;
  };

  let maxArea = 0;
  const row = grid.length;
  const cols = grid[0].length;

  // call DFS search cells that equal 1
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j, grid));
      }
    }
  }

  return maxArea;
};
