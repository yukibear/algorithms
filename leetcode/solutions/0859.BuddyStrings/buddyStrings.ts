export default function buddyStrings(A: string, B: string): boolean {
  if (A.length !== B.length) {
    return false;
  }

  let diff: number[] = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      diff.push(i);
    }
  }

  return diff.length === 2 && A[diff[0]] === B[diff[1]] && A[diff[1]] === B[diff[0]]
    || diff.length === 0 && new Set<string>(A).size !== A.length;
}
