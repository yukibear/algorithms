/**
 * @param {string} str
 * @return {number}
 */
export default function longestPalindrome(
  str: string
): number {
  let list: Record<string, number> = {};

  let length = 0;
  for (let s of str) {
    if (list[s]) {
      list[s]++;
    } else {
      list[s] = 1;
    }

    if (list[s] === 2) {
      length += 2;
      list[s] = 0;
    }
  }
  return (length === str.length) ? length : length + 1;
}
