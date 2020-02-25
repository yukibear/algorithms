export default function maxAreaOfIsland(grid: number[][]): number {
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, countIsland(grid, i, j));
      }
    }
  }

  return max;
}

function countIsland(grid: number[][], i: number, j: number): number {
  if (!grid[i] || !grid[i][j]) {
    return 0;
  }

  grid[i][j] = 0;

  return (
    1 +
    countIsland(grid, i + 1, j) +
    countIsland(grid, i - 1, j) +
    countIsland(grid, i, j + 1) +
    countIsland(grid, i, j - 1)
  );
}
