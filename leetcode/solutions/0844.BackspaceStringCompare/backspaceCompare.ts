export default function backspaceCompare(S: string, T: string): boolean {
  let si = S.length;
  let ti = T.length;

  while (true) {
    si = doBackspace(S, si - 1);
    ti = doBackspace(T, ti - 1);

    if (si < 0 || ti < 0 || S[si] !== T[ti]) {
      return si === -1 && ti === -1;
    }
  }
}

function doBackspace(S: string, i: number): number {
  for (let bs = 0; i >= 0; i--) {
    if (S[i] === "#") {
      bs++;
    } else if (bs > 0) {
      bs--;
    } else {
      return i;
    }
  }

  return i;
}
