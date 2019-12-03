/**
 * @param {number} c
 * @return {boolean}
 */
export default function judgeSquareSum(
  c: number
): boolean {
  let limit = Math.sqrt(c);
  if (limit % 1 === 0) return true;
  for (let i = 1; i < limit; i++) {
    if (Math.sqrt(c - i * i) % 1 === 0) return true;
  }

  return false;
}
