export default function findLHS(nums: number[]): number {
  const valueCountMap = new Map<number, number>();

  for (const num of nums.values()) {
    valueCountMap.set(num, (valueCountMap.get(num) ?? 0) + 1);
  }

  let max = 0;

  for (const key of valueCountMap.keys()) {
    if (valueCountMap.has(key + 1)) {
      max = Math.max(
        max,
        valueCountMap.get(key)! + valueCountMap.get(key + 1)!
      );
    }
  }

  return max;
}
