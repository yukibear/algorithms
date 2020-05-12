export default function singleNonDuplicate(nums: number[]): number {
  for (let i = 0; i < nums.length; i += 2) {
    if (i === nums.length - 1 || nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }

  return -1;
}
