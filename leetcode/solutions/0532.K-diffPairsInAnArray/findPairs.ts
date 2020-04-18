export default function findPairs(nums: number[], k: number): number {
  if (k < 0) {
    return 0;
  }

  const numMap = new Map<number, number>();

  for (const n of nums) {
    numMap.set(n, (numMap.get(n) || 0) + 1);
  }

  let numberOfPairs = 0;

  for (const num of numMap.keys()) {
    const pair = num + k;
    const numCount = numMap.get(pair) || 0;

    if (!numMap.has(pair) || (num === pair && numCount < 2)) {
      continue;
    }

    numberOfPairs++;
  }

  return numberOfPairs;
}
