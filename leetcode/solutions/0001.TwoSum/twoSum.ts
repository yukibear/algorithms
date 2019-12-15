export default function twoSum(
  nums: number[],
  target: number
): [number, number] | null {
  let map = [];

  for (let i = 0; i < nums.length; ++i) {
    let key = target - nums[i];
    if (map[key] != null) return [map[key], i];
    map[nums[i]] = i;
  }
  return null;
}
