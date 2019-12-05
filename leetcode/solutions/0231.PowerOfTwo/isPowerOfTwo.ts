/**
 * @param {number} n
 * @return {boolean}
 */
export default function isPowerOfTwo(
  n: number
): boolean {
  while (n >= 1) {
    if (n === 1) return true;
    n = n / 2;
  }
  return false;
}
