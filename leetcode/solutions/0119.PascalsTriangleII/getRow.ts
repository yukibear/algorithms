export default function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) {
    return [1];
  }
  if (rowIndex === 1) {
    return [1, 1];
  }

  let prevRow = [1, 1];

  for (let i = 2; i <= rowIndex; i++) {
    const last = i >>> 1;
    const currentRow = [1];
    currentRow[i] = 1;

    for (let j = 1; j <= last; j++) {
      if (j === last && i % 2 === 0) {
        currentRow[j] = prevRow[j - 1] * 2;
        break;
      }

      currentRow[j] = currentRow[i - j] = prevRow[j - 1] + prevRow[j];
    }

    prevRow = currentRow;
  }

  return prevRow;
}

// Recursion version
export function getRow_Recursion(rowIndex: number): number[] {
  if (rowIndex === 0) {
    return [1];
  }
  if (rowIndex === 1) {
    return [1, 1];
  }

  const last = rowIndex >>> 1;
  const prevRow = getRow(rowIndex - 1);
  const currentRow = [1];
  currentRow[rowIndex] = 1;

  for (let i = 1; i <= last; i++) {
    if (i === last && rowIndex % 2 === 0) {
      currentRow[i] = prevRow[i - 1] * 2;
      break;
    }

    currentRow[i] = currentRow[rowIndex - i] = prevRow[i - 1] + prevRow[i];
  }

  return currentRow;
}
