export default function findMaxLength(nums: number[]): number {
  let sum = 0;
  let max = 0;
  const sumMap = new Map<number, number>();

  for (const [i, n] of nums.entries()) {
    if (n === 0) {
      sum--;
    } else {
      sum++;
    }

    if (sum === 0) {
      max = i + 1;
      continue;
    }

    if (!sumMap.has(sum)) {
      sumMap.set(sum, i);
    } else if (i - (sumMap.get(sum) ?? 0) > max) {
      max = i - (sumMap.get(sum) ?? 0);
    }
  }

  return max;
}
