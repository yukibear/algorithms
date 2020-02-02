export default function minSetSize(arr: number[]): number {
  const map = new Map<number, number>();

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const keys = [...map.entries()].sort(([, a], [, b]) => b - a);
  let count = 0;
  const half = Math.ceil(arr.length / 2);
  let sum = 0;
  for (const [i, val] of keys) {
    sum += map.get(i)!;
    count++;
    if (sum >= half) {
      break;
    }
  }

  return count;
}
