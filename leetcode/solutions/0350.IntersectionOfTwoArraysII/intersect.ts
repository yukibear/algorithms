export default function intersect(
  nums1: number[],
  nums2: number[]
): number[] {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const sorter = (a: number, b: number) => a - b;
  nums1 = nums1.sort(sorter);
  nums2 = nums2.sort(sorter);

  let lastFound = -1;

  return nums1.filter(num => {

    const tmp = nums2.indexOf(num, lastFound + 1);

    if (tmp !== -1) {
      lastFound = tmp;

      return true;
    }

    return false;
  });
}

export function intersect_BinarySearch(
  nums1: number[],
  nums2: number[]
): number[] {
  if (nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const result: number[] = [];
  nums2 = nums2.sort((a, b) => a - b);

  for (const num of nums1) {
    const i = search(nums2, num);

    if (i !== -1) {
      result.push(nums2.splice(i, 1)[0]);
    }
  }

  return result;
}

function search(nums: number[], n: number) {
  if (nums.length === 0) {
    return -1;
  }

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
