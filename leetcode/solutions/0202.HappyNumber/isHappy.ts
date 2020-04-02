export default function isHappy(n: number): boolean {
  const set = new Set<number>();

  while (true) {
    let sum = 0;

    while (n > 0) {
      const num = n % 10;
      sum += num ** 2;
      n = Math.floor(n / 10);
    }

    if (sum === 1) {
      return true;
    }

    if (set.has(sum)) {
      return false;
    }

    set.add(sum);
    n = sum;
  }
}
