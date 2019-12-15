export default function sequentialDigits(
  low: number,
  high: number
): number[] {
  let result: number[] = [];

  let lowKeta = low.toString().length;
  let highKeta = high.toString().length;

  loop:
  for (let keta = lowKeta; keta <= highKeta; keta++) {
    for (let i = 1; i <= 10 - keta; i++) {
      let num = 0;
      for (let j = keta-1, n = i; j >= 0 && n < 10; j--, n++) {
        num += 10 ** j * n;
        if (num === 7890) break loop;
      }
      if (num > high) {
        break loop;
      }
      if (num >= low && num <= high) {
        result.push(num);
      }
    }
  }

  return result;
}
