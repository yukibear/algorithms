export default function canJump(nums: number[]): boolean {
  let i = 0;

  for (let max = 0; i < nums.length && i <= max; i++) {
    max = Math.max(max, i + nums[i]);
  }

  return i === nums.length;
}
