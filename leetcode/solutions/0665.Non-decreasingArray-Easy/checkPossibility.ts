export default function checkPossibility(nums: number[]): boolean {
  if (nums.length <= 2) {
    return true;
  }

  let hasDecreced = false;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] <= nums[i]) {
      continue;
    }

    if (hasDecreced) {
      return false;
    }

    if (
      nums[i - 1] > nums[i + 1] &&
      nums[i - 2] != null &&
      nums[i - 2] > nums[i]
    ) {
      return false;
    }

    hasDecreced = true;
  }

  return true;
}
