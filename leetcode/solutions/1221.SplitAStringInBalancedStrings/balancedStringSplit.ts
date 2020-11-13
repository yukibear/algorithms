export default function balancedStringSplit(s: string): number {
  let result = 0;
  let count = 0;

  for (const c of s) {
    count += c === "R" ? 1 : -1;
    if (count === 0) {
      result++;
    }
  }

  return result;
}
