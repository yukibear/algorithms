/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
export default function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] {
  const targetColor = image[sr][sc];
  if (targetColor === newColor) {
    return image;
  }

  const dfs = (n: number, m: number) => {
    if (image[n] == null || image[n][m] == null) {
      return;
    }

    if (image[n][m] !== targetColor) {
      return;
    }

    image[n][m] = newColor;

    dfs(n - 1, m);
    dfs(n + 1, m);
    dfs(n, m - 1);
    dfs(n, m + 1);
  }

  dfs(sr, sc);

  return image;
}
