export default function generate(numRows: number): number[][] {
  if (numRows === 0) {
    return [];
  }
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  const result: number[][] = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    let currentRow = [1];
    currentRow[i] = 1;
    const lastRow = result[i - 1];
    const max = Math.floor(i / 2);

    for (let j = 1; j <= max; j++) {
      if (j === max && i % 2 === 0) {
        currentRow[j] = lastRow[j - 1] * 2;
        break;
      }

      currentRow[j] = currentRow[i - j] = lastRow[j - 1] + lastRow[j];
    }

    result.push(currentRow);
  }

  return result;
}
