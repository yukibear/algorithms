export default function minSubArrayLen(s: number, nums: number[]): number {
  let l = 0;
  let r = 0;
  let sum = 0;
  let minNumCount = Infinity;

  for (; l < nums.length && l <= r; l++) {
    for (; r < nums.length && sum < s; r++) {
      sum += nums[r];
    }

    if (r === nums.length && sum < s) {
      break;
    }

    minNumCount = Math.min(minNumCount, r - l);
    sum -= nums[l];
  }

  return minNumCount === Infinity ? 0 : minNumCount;
}
