export default class NumArray {
  private sums: number[];

  constructor(nums: number[]) {
    for (let i = 1; i < nums.length; i++) {
      nums[i] += nums[i - 1];
    }

    this.sums = nums;
  }

  sumRange(i: number, j: number): number {
    if (i === 0) {
      return this.sums[j];
    }

    return this.sums[j] - this.sums[i - 1];
  }
}
