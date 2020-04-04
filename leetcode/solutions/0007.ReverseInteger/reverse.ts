export default function reverse(x: number): number {
  let isMinus = false;

  if (x < 0) {
    isMinus = true;
    x = -x;
  }

  let result = 0;

  while (x > 0) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);

    // return 0 if result(32-bit signed integer) will overflow
    if (
      (result > MAX_INT_GUARD_THRESHOLD && x) ||
      (result === MAX_INT_GUARD_THRESHOLD &&
        ((isMinus && x > 8) || (!isMinus && x > 7)))
    ) {
      return 0;
    }
  }

  return isMinus ? -result : result;
}

const MAX_INT_GUARD_THRESHOLD = 214748364;
