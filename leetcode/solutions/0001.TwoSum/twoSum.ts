export default function twoSum(
  nums: number[],
  target: number
): [number, number] | null {
  // [number, index of the number in nums]
  const map = new Map<number, number>();

  for (const [i, num] of nums.entries()) {
    const pair = map.get(target - num);

    if (pair != null) {
      return [pair, i];
    }

    map.set(num, i);
  }

  return null;
}
