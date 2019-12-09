/**
 * @param {number} n
 * @return {boolean}
 */
export default function isPowerOfTwo(
  n: number
): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}
