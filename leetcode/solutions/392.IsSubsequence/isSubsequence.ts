/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export default function isSubsequence(
  subsequence: string,
  target: string
): boolean {
  if (target.length < subsequence.length) return false;
  if (subsequence.length === 0) return true;

  let i = 0;
  for (const s of target) {
    if (subsequence[i] === s) {
      i++;
      if (i === subsequence.length) return true;
    }
  }
  return false;
}
