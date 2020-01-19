export default function containsNearbyDuplicate(
  nums: number[],
  k: number
): boolean {
  // map form: [value in nums, index of value]
  const lastIndices = new Map<number, number>();

  for (const i of nums.keys()) {
    const num = nums[i];

    if (lastIndices.has(num) && i - lastIndices.get(num)! <= k) {
      return true;
    }

    lastIndices.set(num, i);
  }

  return false;
}
