export default function canJump(nums: number[]): boolean {
  let i = 0

  for (let pos = 0; i < nums.length && i <= pos; i++) {
    pos = Math.max(pos, i + nums[i]);
  }

  return i === nums.length;
}
