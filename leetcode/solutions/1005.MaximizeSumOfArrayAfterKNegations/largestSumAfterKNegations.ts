export default function largestSumAfterKNegations(
  A: number[],
  K: number
): number {
  A.sort((a, b) => a - b);

  let sum = 0;
  let min = Infinity;
  let zeroExists = false;

  for (let [i, num] of A.entries()) {
    if (num < 0 && K > 0) {
      num = -num;
      K--;
    }
    if (num === 0) {
      zeroExists = true;
    }

    sum += num;

    if (!zeroExists) {
      min = Math.min(min, num);
    }
  }

  if (!zeroExists && K % 2 !== 0) {
    sum -= min * 2;
  }

  return sum;
}
