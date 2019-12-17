/**
 * @param {number} rowIndex
 * @return {number[]}
 */
export default function getRow(rowIndex: number): number[] {
  let prevRow = [1];

  for (let i = 2; i <= rowIndex; i++) {
    const currentRow = [1];
    const lastIndex = Math.floor(i / 2);

    for (let j = 1; j <= lastIndex; j++) {
      if (j === lastIndex && i % 2 === 0) {
        currentRow[j] = prevRow[j - 1] * 2;
      } else {
        currentRow[j] = prevRow[j - 1] + prevRow[j];
      }
    }
    console.log(prevRow)
    prevRow = currentRow;
  }

  if (rowIndex % 2 === 0) {
    return prevRow.concat([...prevRow.slice(0, prevRow.length - 1)].reverse());
  } else {
    return prevRow.concat([...prevRow].reverse());
  }
}
