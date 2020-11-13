export default function balancedStringSplit(s: string): number {
  let start = "";
  let result = 0;
  let count = 0;

  for (const c of s) {
    if (count === 0) {
      result++;
      count++;
      start = c;
    } else if (c === start) {
      count++;
    } else {
      count--
    }
  }

  return result;
}
