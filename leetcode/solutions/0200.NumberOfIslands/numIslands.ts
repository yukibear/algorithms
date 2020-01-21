export default function numIslands(grid: string[][]): number {
  function destroyIsland(i: number, j: number) {
    if (!grid[i] || !grid[i][j] || grid[i][j] === "0") {
      return;
    }

    grid[i][j] = "0";

    destroyIsland(i + 1, j);
    destroyIsland(i, j + 1);
  }

  function searchAndDestroyIsland(i: number, j: number, count: number): number {
    if (!grid[i] || !grid[i][j]) {
      return count;
    }

    if (grid[i][j] === "1") {
      count++;
      destroyIsland(i, j);
    }

    count = searchAndDestroyIsland(i + 1, j, count);
    count = searchAndDestroyIsland(i, j + 1, count);

    return count;
  }

  return searchAndDestroyIsland(0, 0, 0);
}
