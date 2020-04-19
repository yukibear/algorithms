export default function countElements(arr: number[] | null): number {
  if (arr === null || arr.length <= 1) {
    return 0;
  }

  const numMap = new Map<number, number>();

  for (const num of arr) {
    numMap.set(num, (numMap.get(num) || 0) + 1);
  }

  let result = 0;

  for (const num of numMap.keys()) {
    result += numMap.get(num - 1) || 0;
  }

  return result;
}
