export default function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const mid = (l + r) >>> 1;

    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  const start = l;
  nums = nums.slice(l).concat(nums.slice(0, l));
  l = 0;
  r = nums.length - 1;

  while (l <= r) {
    const mid = (l + r) >>> 1;

    if (nums[mid] === target) {
      return (mid + start) % nums.length;
    }

    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
}
