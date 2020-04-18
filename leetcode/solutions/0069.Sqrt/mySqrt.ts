export default function mySqrt(num: number): number {
  if (num === 1) {
    return 1;
  }

  let l = 0;
  let r = num >>> 1;

  while (l <= r) {
    const sqrt = (l + r) >>> 1;
    const pow2 = sqrt * sqrt;

    if (pow2 === num) {
      return sqrt;
    }

    if (pow2 < num) {
      l = sqrt + 1;
    } else {
      r = sqrt - 1;
    }
  }

  return r;
}
