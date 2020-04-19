export default function minPathSum(grid: number[][]): number {
  const numRow = grid.length;
  const numCol = grid[0].length;

  for (let i = 1; i < numCol; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for (let i = 1; i < numRow; i++) {
    grid[i][0] += grid[i - 1][0];

    for (let j = 1; j < numCol; j++) {
      grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
    }
  }

  return grid[numRow - 1][numCol - 1];
}
