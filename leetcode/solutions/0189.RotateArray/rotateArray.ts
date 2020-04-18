export default function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  const timesToRepeat = nums.length - k;
  const orgLength = nums.length;

  for (let i = 0; i < timesToRepeat; i++) {
    nums[orgLength + i] = nums[i];
  }

  nums.splice(0, timesToRepeat);
}
