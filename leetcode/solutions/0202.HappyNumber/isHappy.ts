export default function isHappy(n: number): boolean {
  const set = new Set<number>();

  while (!set.has(n)) {
    // To break inifinite loop.
    set.add(n);

    let sum = 0;

    while (n > 0) {
      sum += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }

    n = sum;
  }

  return n === 1;
}
