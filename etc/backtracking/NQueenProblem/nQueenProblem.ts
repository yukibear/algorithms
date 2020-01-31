export default function nQueenProblem(): number[][] {
  const res: number[][] = Array.from({ length: 8 }, () =>
    Array.from({ length: 8 }, () => 0)
  );

  function dfs(i: number, j: number) {
    if (!res[i] || res[i][j] == null || inLeftRange(res, i, j)) {
      return false;
    }

    res[i][j] = 1;

    if (j === 7) {
      return true;
    }

    for (let k = 1; k <= 7; k++) {
      if (dfs((i + k) % 8, j + 1)) {
        return true;
      }
    }

    res[i][j] = 0;

    return false;
  }

  for (let i = 0; i < 8; i++) {
    if (dfs(i, 0)) {
      break;
    }
  }

  return res;
}

export function inLeftRange(arr: number[][], i: number, j: number) {
  if (arr[i].indexOf(1) !== -1) {
    return true;
  }

  for (let k = 1; k <= j; k++) {
    if (
      (arr[i - k] && arr[i - k][j - k]) ||
      (arr[i + k] && arr[i + k][j - k])
    ) {
      return true;
    }
  }

  return false;
}
