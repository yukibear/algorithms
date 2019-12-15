export default function rotate(
  nums: number[],
  k: number
): void {
  k = k % nums.length;
  const times = nums.length - k;
  const orgLength = nums.length;

  for (let i = 0; i < times; i++) {
    nums[orgLength + i] = nums[i];
  }

  nums.splice(0, times);
}
