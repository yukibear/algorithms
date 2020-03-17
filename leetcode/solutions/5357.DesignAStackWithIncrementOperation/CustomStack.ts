export default class CustomStack {
  private nums: number[] = [];
  private maxSize: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  push(x: number): void {
    if (this.nums.length === this.maxSize) {
      return;
    }

    this.nums.push(x);
  }

  pop(): number {
    return this.nums.pop() ?? -1;
  }

  increment(k: number, val: number): void {
    if (k === 0) {
      return;
    }

    k = Math.min(k, this.nums.length);

    for (let i = k - 1; i >= 0 ; i--) {
      this.nums[i] += val;
    }
  }
}
