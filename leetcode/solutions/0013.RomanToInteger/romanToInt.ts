/**
 * @param {string} s
 * @return {number}
 */
const romanNums = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

export default function romanToInt(
  s: string
): number {
  let sum = 0;
  let prevNum = 0;

  for (let i = s.length - 1; i >= 0; --i) {
    let num = romanNums.get(s.charAt(i)) || 0;
    sum += (num < prevNum) ? -num : num;
    prevNum = num;
  }

  return sum;
}
