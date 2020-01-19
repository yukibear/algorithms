export default function twoSum(
  nums: number[],
  target: number
): [number, number] | null {
  // [number, index of the number in nums]
  const map = new Map<number, number>();

  for (const i of nums.keys()) {
    const current = nums[i];
    const pair = target - current;

    if (map.has(pair)) {
      return [map.get(pair)!, i];
    }

    map.set(current, i);
  }

  return null;
}
