export default function oddCells(
  n: number,
  m: number,
  indices: number[][]
): number {
  // for each cell, set a flag which indicates whether a value is odd
  const row = new Array(n).fill(false);
  const col = new Array(m).fill(false);

  for (const [ri, ci] of indices) {
    row[ri] = !row[ri];
    col[ci] = !col[ci];
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] ^ col[j]) {
        count++;
      }
    }
  }

  return count;
}
