export default function findLHS(nums: number[]): number {
  const valueCountMap = new Map<number, number>();

  for (const num of nums.values()) {
    valueCountMap.set(num, (valueCountMap.get(num) ?? 0) + 1);
  }

  let max = 0;

  for (const [num, count] of valueCountMap) {
    const nextCount = valueCountMap.get(num + 1);

    if (nextCount != null) {
      max = Math.max(max, count + nextCount);
    }
  }

  return max;
}
