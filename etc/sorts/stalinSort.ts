export default function stalinSort(
  nums: number[]
): number[] {
  if (nums.length === 0) return [];

  let prev = nums[0];
  return nums.filter(num => prev <= num && ((prev = num) || true));
}
