/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
export default function shiftGrid(
  grid: number[][],
  k: number
): number[][] {
  const n = grid.length;
  const m = grid[0].length;

  k = k % (n * m);
  if (k === 0) return grid;

  const returnArr = JSON.parse(JSON.stringify((new Array(n)).fill((new Array(m)).fill(0))));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let nextJ = j + k;
      let x = i, y = j;
      if (nextJ >= m) {
        y = nextJ % m;
        x = (i + Math.floor(nextJ / m)) % n;
      } else {
        x = i;
        y = nextJ;
      }
      returnArr[x][y] = grid[i][j];
    }
  }

  return returnArr;
}
