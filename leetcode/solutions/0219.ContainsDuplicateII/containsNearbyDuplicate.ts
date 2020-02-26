export default function containsNearbyDuplicate(
  nums: number[],
  k: number
): boolean {
  // map form: [nums[i], i]
  const lastIndices = new Map<number, number>();

  for (const [i, num] of nums.entries()) {
    if (i - (lastIndices.get(num) ?? -Infinity) <= k) {
      return true;
    }

    lastIndices.set(num, i);
  }

  return false;
}
