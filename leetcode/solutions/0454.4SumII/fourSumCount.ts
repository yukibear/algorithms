export default function fourSumCount(
  A: number[],
  B: number[],
  C: number[],
  D: number[]
): number {
  const map = new Map<number, number>();

  for (const a of A) {
    for (const b of B) {
      const sum = a + b;
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }

  let count = 0;

  for (const c of C) {
    for (const d of D) {
      const sum = -c - d;
      count += map.get(sum) || 0;
    }
  }

  return count;
}
