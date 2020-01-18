export default function solveSudoku(board: string[][]): void {
  const rowCandidates = Array.from({ length: 9 }, _ => new Set(ZERO_TO_NINE));
  const colCandidates = Array.from({ length: 9 }, _ => new Set(ZERO_TO_NINE));
  const blockCandidates = Array.from({ length: 9 }, _ => new Set(ZERO_TO_NINE));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const char = board[i][j];

      if (char === EMPTY) {
        continue;
      }

      rowCandidates[i].delete(char);
      colCandidates[j].delete(char);

      const blockIndex = Math.floor(i / 3) * Math.floor(j / 3);
      blockCandidates[blockIndex].delete(char);
    }
  }

  for (const blockCandidate of blockCandidates) {
  }
}

const ZERO_TO_NINE = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const EMPTY = ".";
