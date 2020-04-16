export default function productExceptSelf(nums: number[]): number[] {
  let left = 1;
  let right = 1;
  const size = nums.length;
  const result = Array.from({ length: size }, () => 1);

  for (let l = 0; l < size; l++) {
    const r = size - l - 1;
    result[l] *= left;
    result[r] *= right;
    left *= nums[l];
    right *= nums[r];
  }

  return result;
}
