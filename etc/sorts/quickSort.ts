export default function quickSort(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  if (nums.length === 2) {
    return nums.sort((a, b) => a - b);
  }

  const pivot = Math.max(nums[0], nums[1]);
  let r = nums.length - 1;

  main_loop: for (let l = 0; l != r; l++) {
    if (nums[l] < pivot) {
      continue;
    }

    while (true) {
      if (nums[r] < pivot) {
        let tmp = nums[r];
        nums[r] = nums[l];
        nums[l] = tmp;
        break;
      }

      r--;

      if (l === r) {
        break main_loop;
      }
    }
  }

  return quickSort(nums.splice(0, r)).concat(quickSort(nums));
}
