export default function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] {
  if (image[sr][sc] === newColor) {
    return image;
  }
  fill(image, sr, sc, image[sr][sc], newColor);
  return image;
}

const fill = (
  image: number[][],
  n: number,
  m: number,
  color: number,
  newColor: number,
): void => {
  if (image[n] == null || image[n][m] == null || image[n][m] !== color) {
    return;
  }
  image[n][m] = newColor;
  fill(image, n - 1, m, color, newColor);
  fill(image, n + 1, m, color, newColor);
  fill(image, n, m - 1, color, newColor);
  fill(image, n, m + 1, color, newColor);
}
