export function numberOfSteps_DividingByTwo(num: number): number {
  if (num === 0) {
    return 0;
  }

  let count = 0;

  while (num > 0) {
    if (num % 2 === 1) {
      num -= 1;
      count++;
    } else {
      num /= 2;
      count++;
    }
  }

  return count;
}

export function numberOfSteps_Bitwise(num: number): number {
  if (num === 0) {
    return 0;
  }

  let count = 0;

  for (; num > 0; num >>= 1, count++) {
    if (num % 2 === 1) {
      count++;
    }
  }

  return count - 1;
}
