type element = {
  val: number;
  min: number;
};

export default class MinStack {
  private stack: element[] = [];

  push(x: number) {
    this.stack.push({
      min: this.calcMin(x),
      val: x,
    });
  }

  pop() {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1]?.min;
  }

  calcMin(x: number): number {
    if (this.stack.length === 0) {
      return x;
    }

    return Math.min(this.stack[this.stack.length - 1].min, x);
  }
}
