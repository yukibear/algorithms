export default function minSetSize(arr: number[]): number {
  const numCountMap = new Map<number, number>();

  for (const num of arr) {
    numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
  }

  const sortedCounts = [...numCountMap.entries()].sort(
    ([, a], [, b]) => b - a
  );

  let count = 0;
  let half = Math.ceil(arr.length / 2);

  for (const [i] of sortedCounts) {
    half -= numCountMap.get(i)!;
    count++;

    if (half <= 0) {
      break;
    }
  }

  return count;
}
