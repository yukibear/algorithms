export default function intersect(
  nums1: number[],
  nums2: number[]
): number[] {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const result: number[] = [];
  nums2 = nums2.sort((a, b) => a - b);

  for (const num of nums1) {
    const i = search(nums2, num);

    if (i !== -1) {
      nums2 = nums2.slice(0, i).concat(nums2.slice(i + 1));
      result.push(num);
    }
  }

  return result;
}

function search(nums: number[], n: number) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = (l + r) >>> 1;

    if (nums[mid] === n) {
      return mid;
    }

    if (nums[mid] > n) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
}
