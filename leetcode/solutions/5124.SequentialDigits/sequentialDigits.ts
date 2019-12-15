export default function sequentialDigits(
  low: number,
  high: number
): number[] {
  let result: number[] = [];
  const lowLen = ~~Math.log10(low) + 1;
  const highLen = ~~Math.log10(high) + 1;

  loop:
  for (let len = lowLen; len <= highLen; len++) {
    for (let i = 1; i <= 10 - len; i++) {
      let num = 0;
      for (let j = len-1, n = i; j >= 0 && n < 10; j--, n++) {
        num += 10 ** j * n;
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
