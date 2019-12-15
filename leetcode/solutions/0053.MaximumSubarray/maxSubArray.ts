export default function maxSubArray(
  nums: number[],
): number {

  let max = nums[0];
  let prevMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prevMax = Math.max(prevMax + nums[i], nums[i]);
    if (prevMax > max) max = prevMax;
  }

  return max;
}
