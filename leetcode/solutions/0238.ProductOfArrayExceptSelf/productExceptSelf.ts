export default function productExceptSelf(nums: number[]): number[] {
  let zeroCount = 0;
  let productOfAll = nums.reduce(
    (prev, n) => (n === 0 && ++zeroCount ? prev : prev * n),
    1
  );

  for (const [i, n] of nums.entries()) {
    switch (zeroCount) {
      case 0:
        nums[i] = productOfAll / n;
        break;

      case 1:
        if (n === 0) {
          nums[i] = productOfAll;
        } else {
          nums[i] = 0;
        }
        break;

      default:
        nums[i] = 0;
    }
  }

  return nums;
}
