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

    if (nums[mid] < target) {
      if (Math.min(nums[l], nums[mid], nums[r]) === nums[mid]) {
        return search(nums.slice(0, mid), target)
          || search(nums.slice(mid + 1), target);
      }

      l = mid + 1;
    } else {
      if (Math.max(nums[l], nums[mid], nums[r]) === nums[mid]) {
        return search(nums.slice(0, mid), target)
          || search(nums.slice(mid + 1), target);
      }

      r = mid - 1;
    }
  }

  return false;
}
