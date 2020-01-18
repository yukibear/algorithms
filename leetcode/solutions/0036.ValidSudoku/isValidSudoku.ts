export default function isValidSudoku(board: string[][]): boolean {

  for (let i = 0; i < 9; i++) {
    if (!rowIsValid(board[i])
      || !colIsValid(board, i)
      || !subBoardIsValid(board, i)
    ) {
      return false;
    }
  }

  return true;
}

function rowIsValid(row: string[]): boolean {
  const set = new Set<string>();

  for (const char of row) {
    if (char === DOT) {
      continue;
    }
    if (set.has(char)) {
      return false;
    }
    set.add(char);
  }

  return true;
}

function colIsValid(board: string[][], col: number): boolean {
  const set = new Set<string>();

  for (let i = 0; i < 9; i++) {
    const char = board[i][col];

    if (char === DOT) {
      continue;
    }
    if (set.has(char)) {
      return false;
    }

    set.add(char);
  }

  return true;
}

function subBoardIsValid(board: string[][], subBoardIndex: number): boolean {
  const set = new Set<string>();
  let rowStart = Math.floor(subBoardIndex / 3) * 3;
  let colStart = subBoardIndex % 3 * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const char = board[rowStart + i][colStart + j];

      if (char === DOT) {
        continue;
      }
      if (set.has(char)) {
        return false;
      }

      set.add(char);
    }
  }

  return true;
}

const DOT = ".";
