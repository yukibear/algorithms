export default function repeatedNTimes(A: number[]): number {
  const set = new Set<number>();
  for (const n of A) {
    if (set.has(n)) {
      return n;
    }

    set.add(n);
  }

  return -1;
}
