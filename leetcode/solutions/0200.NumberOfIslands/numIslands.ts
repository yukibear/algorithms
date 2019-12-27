export default function numIslands(grid: string[][]): number {
  let islandCount = 0;

  function destroyIsland(i: number, j: number) {
    if (!grid[i] || !grid[i][j] || grid[i][j] === "0") {
      return;
    }

    grid[i][j] = "0";

    destroyIsland(i + 1, j);
    destroyIsland(i, j + 1);
  }

  function searchAndDestroyIsland(i: number, j: number) {
    if (!grid[i] || !grid[i][j]) {
      return;
    }

    if (grid[i][j] === "1") {
      islandCount++;
      destroyIsland(i, j);
    }

    searchAndDestroyIsland(i + 1, j);
    searchAndDestroyIsland(i, j + 1);
  }

  searchAndDestroyIsland(0, 0);

  return islandCount;
}
