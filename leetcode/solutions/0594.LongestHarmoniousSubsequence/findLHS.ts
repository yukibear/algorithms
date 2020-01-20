export default function findLHS(nums: number[]): number {
  let lastValue = 0;
  let tmpCount = 0;
  let maxCount = -Infinity;
  const remainIndices = new Set<number>(nums.keys());
  const iterator = remainIndices.values();

  for (const start of iterator) {
    remainIndices.delete(start);
    lastValue = nums[start];
    tmpCount = 1;

    for (let i = 1; i < nums.length; i++) {
      const actualIndex = (start + i) % nums.length;
      const diff = Math.abs(nums[actualIndex] - lastValue);

      if (diff <= 1) {
        lastValue = nums[actualIndex];
        remainIndices.delete(actualIndex);
        tmpCount++;
      }
    }

    maxCount = Math.max(maxCount, tmpCount);
  }

  return maxCount;
}
