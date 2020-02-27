export default class KthLargest {
  i: number;
  nums: number[];

  constructor(k: number, nums: number[]) {
    this.i = k - 1;
    this.nums = nums;
  }

  add(num: number) {
    this.nums.push(num);

    return this.nums.sort((a, b) => b - a)[this.i];
  }
}
