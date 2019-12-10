/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
export default function buddyStrings(
  A: string,
  B: string
): boolean {
  if (A.length !== B.length) return false;

  const map = new Map<string, number>();
  let diffs: number[] = [];
  for (let i = 0; i < A.length; i++) {
    map.set(A[i], (map.get(A[i]) || 0) + 1);
    if (A[i] !== B[i]) {
      if (diffs.length === 2) return false;
      diffs.push(i);
    }
  }

  if (diffs.length === 1) return false;
  if (diffs.length === 2) {
    if (A[diffs[0]] === B[diffs[1]] && A[diffs[1]] === B[diffs[0]]) {
      return true;
    } else {
      return false;
    }
   }
  return Array.from(map.values()).filter(n => n > 1).length > 0;
}
