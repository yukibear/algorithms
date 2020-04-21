export default function findMin(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const mid = (l + r) >>> 1;

    if (nums[l] === nums[mid] && nums[r] === nums[mid]) {
      l++;
      r--;
      continue;
    }
    if (nums[l] > nums[mid]) {
      r = mid;
      continue;
    }

    if (nums[mid] <= nums[r]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return nums[l];
}
