/**
 * @param {string} s
 * @return {number}
 */
export default function longestPalindrome(
  str: string
): number {
  let list: Record<string, number> = {};

  for (let s of str) {
    if (list[s]) {
      list[s]++;
    } else {
      list[s] = 1;
    }
  }

  let sum = 0;
  let oddExists = false;
  for (let count of Object.values(list)) {
    if (count % 2 === 0) {
      sum += count;
    } else {
      sum += count - 1;
      oddExists = true;
    }
  }
  return sum + (oddExists ? 1 : 0);
}
