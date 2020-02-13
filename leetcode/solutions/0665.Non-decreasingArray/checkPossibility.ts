export default function checkPossibility(nums: number[]): boolean {
  let hasDecreced = false;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] <= nums[i]) {
      continue;
    }

    if (hasDecreced) {
      return false;
    }

    if (i >= 2 && nums[i - 2] > nums[i]) {
      nums[i] = nums[i - 1];
    } else {
      nums[i - 1] = nums[i];
    }

    hasDecreced = true;
  }

  return true;
}
