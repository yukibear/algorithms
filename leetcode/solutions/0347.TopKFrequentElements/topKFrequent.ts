export default function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  for (const num of nums.values()) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(a => a[0]);
}
