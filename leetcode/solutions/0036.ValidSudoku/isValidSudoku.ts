export default function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const char = board[i][j];

      if (char === EMPTY) {
        continue;
      }

      const rowKey = `${char} in row ${i.toString()}`;
      const colKey = `${char} in column ${j.toString()}`;
      const blockKey = `${char} in block ` + Math.floor(i / 3) + "-" +
        Math.floor(j / 3);

      if (seen.has(rowKey) || seen.has(colKey) || seen.has(blockKey)) {
        return false;
      }

      seen.add(rowKey);
      seen.add(colKey);
      seen.add(blockKey);
    }
  }

  return true;
}

const EMPTY = ".";
