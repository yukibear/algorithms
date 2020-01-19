export default function countSquares(
  matrix: number[][]
): number {
  if (matrix[0] == null || matrix[0][0] == null) {
    return 0;
  }

  const n = matrix.length;
  const m = matrix[0].length;
  let count = 0;
  let size = 1;

  while (n >= size && m >= size) {
    for (let i = 0; i <= n - size; i++) {
      for (let j = 0; j <= m - size; j++) {
        if (isOk(matrix, i, j, size)) {
          count++;
        }
      }
    }

    size++;
  }

  return count;
}

function isOk(matrix: number[][], i: number, j: number, size: number) {
  for (let ii = 0; ii < size; ii++) {
    for (let jj = 0; jj < size; jj++) {
      if (!matrix[i + ii][j + jj]) {
        return false;
      }
    }
  }

  return true;
}
