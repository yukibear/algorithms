export default function maxSideLength(
  mat: number[][],
  threshold: number
): number {
  let max = Math.min(mat.length, mat[0].length);
  let result = 0;

  len_loop:
  for (let len = 1; len <= max; len++) {
    for (let i = 0; i <= mat.length - len; i++) {
      for (let j = 0; j <= mat[0].length - len; j++) {
        let sum = sumSquare(mat, i, j, len, threshold);
        if (sum != null) {
          result = len;
          continue len_loop;
        }
      }
    }
  }

  return result;
}
const sumSquare = (
  mat: number[][],
  startI: number,
  startJ: number,
  len: number,
  threshold: number
): number | null => {
  let sum = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      sum += mat[startI + i][startJ + j];
      if (sum > threshold) {
        return null;
      }
    }
  }
  return sum;
};
