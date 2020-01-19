export default function tictactoe(
  moves: number[][]
): string {
  let A: number[][] = [];
  let B:number[][] = [];
  for (let i in moves) {
    const [n, m] = moves[i];
    if (Number.parseInt(i) % 2 === 0) {
      if (!A[n]) A[n] = [];
      A[n][m] = 1;
    } else {
      if (!B[n]) B[n] = [];
      B[n][m] = 1;
    }
  }
  if (checkWin(A)) {
    return "A";
  } else if (checkWin(B)) {
    return "B";
  } else if (moves.length < 9) {
    return "Pending";
  } else {
    return "Draw";
  }
}

function checkWin(moves: number[][]) {
  if (moves[0] && moves[1] && moves[2]
    && (moves[0][0] && moves[1][1] && moves[2][2]
    || moves[0][2] && moves[1][1] && moves[2][0])) {
    return true;
  }
  for (let n = 0; n < 3; n++) {
    if (moves[n] && moves[n][0] && moves[n][1] && moves[n][2]
      || moves[0] && moves[1] && moves[2] && moves[0][n] && moves[1][n] && moves[2][n]) {
      return true;
    }
  }
  return false;
}
