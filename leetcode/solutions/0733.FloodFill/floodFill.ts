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
  if (targetColor === newColor) return image;

  const dfs = (i, j) => {
    if (image[i] == null || image[i][j] == null) return;
    if (image[i][j] !== targetColor) return;

    image[i][j] = newColor;

    dfs(i-1, j);
    dfs(i+1, j);
    dfs(i, j-1);
    dfs(i, j+1);
  }

  dfs(sr, sc);

  return image;
}
