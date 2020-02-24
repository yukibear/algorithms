export default class ProductOfNumbers{
  products: number[] = [];
  lastZeroIndex = -1;

  add(num: number): void {
    if (num === 0) {
      this.lastZeroIndex = this.products.length;
    }

    if (this.products.length === 0) {
      this.products.push(num);
      return;
    }

    const prevNum = this.products[this.products.length - 1];

    if (prevNum === 0) {
      this.products.push(num);
    } else {
      this.products.push(prevNum * num);
    }
  };

  getProduct(k: number): number {
    if (this.products.length - k <= this.lastZeroIndex) {
      return 0;
    }

    return this.products[this.products.length - 1] / (this.products[this.products.length - k - 1] || 1);
  };
}
