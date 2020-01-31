export default function theKnightsTour(): number[][] {
  const arr: number[][] = Array.from({ length: 8 }, () =>
    Array.from({ length: 8 }, () => -1)
  );

  function dfs(i: number, j: number, count: number): boolean {
    if (!arr[i] || arr[i][j] == null || arr[i][j] !== -1) {
      return false;
    }

    arr[i][j] = count;

    if (count === 63) {
      return true;
    }

    count++;

    if (
      dfs(i + 2, j + 1, count) ||
      dfs(i + 1, j + 2, count) ||
      dfs(i - 1, j + 2, count) ||
      dfs(i - 2, j + 1, count) ||
      dfs(i - 2, j - 1, count) ||
      dfs(i - 1, j - 2, count) ||
      dfs(i + 1, j - 2, count) ||
      dfs(i + 2, j - 1, count)
    ) {
      return true;
    }

    arr[i][j] = -1;

    return false;
  }

  dfs(0, 0, 0);

  return arr;
}
