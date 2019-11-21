/**
 * @param {number[]} nums
 * @param {number} target
 * @return {[number, number]}
 */
export default function twoSum(
  nums: number[],
  target: number
): [number, number] | null {
  let map = [];
  map[nums[0]] = 0;

  for (let i = 1; i < nums.length; i++) {
    if (map[target - nums[i]] != null) return [map[target - nums[i]], i];
    map[nums[i]] = i;
  }
  return null;
}
