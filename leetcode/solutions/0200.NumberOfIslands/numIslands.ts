export default function numIslands(grid: string[][]): number {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        deleteIsland(grid, i, j);
        count++;
      }
    }
  }

  return count;
}

function deleteIsland(grid: string[][], i: number, j: number) {
  if (!grid[i] || !grid[i][j] || grid[i][j] === "0") {
    return;
  }

  grid[i][j] = "0";

  deleteIsland(grid, i + 1, j);
  deleteIsland(grid, i - 1, j);
  deleteIsland(grid, i, j + 1);
  deleteIsland(grid, i, j - 1);
}
