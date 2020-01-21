export default function search(nums: number[], target: number): boolean {
  if (nums.length === 0) {
    return false;
  }
  if (nums.length === 1) {
    return nums[0] === target;
  }

  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = (l + r) >>> 1;

    if (nums[mid] === target) {
      return true;
    }

    if (nums[l] === nums[mid] && nums[r] === nums[mid]) {
      l++;
      r--;
    } else if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }

      continue;
    }

    if (nums[mid] < target && nums[r] >= target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return false;
}
