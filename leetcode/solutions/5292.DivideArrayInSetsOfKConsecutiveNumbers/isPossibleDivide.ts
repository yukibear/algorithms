export default function isPossibleDivide(
  nums: number[],
  k: number
): boolean {
  if (nums.length === 0 || nums.length % k !== 0) {
    return false;
  }

  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const keys = Array.from(map.keys()).sort((a, b) => a-b);
  let minKey = keys.shift()!;

  while (true) {
    for (let num = minKey; num < k + minKey; num++) {
      let currentNumCount = map.get(num)!;

      if (currentNumCount == null || currentNumCount === 0) {
        return false;
      }

      if (--currentNumCount === 0) {
        map.delete(num);
      } else {
        map.set(num, currentNumCount);
      }
    }

    const keys = Array.from(map.keys());

    if (keys.length === 0) {
      break;
    }
    minKey = keys.sort((a, b) => a-b)[0];
  }

  return true;
}
