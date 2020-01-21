export default function isPossibleDivide(nums: number[], len: number): boolean {
  if (nums.length === 0 || nums.length % len !== 0) {
    return false;
  }

  const numCountMap = new Map<number, number>();

  for (const num of nums) {
    numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
  }

  let minNum: number | null;

  while ((minNum = getFirstKey(numCountMap)) != null) {
    if (!consecutiveNumsExist(minNum, len, numCountMap)) {
      return false;
    }
  }

  return true;
}

function getFirstKey(map: Map<number, number>) {
  // array[0] >= 1
  return [...map.keys()].sort((a, b) => a - b)[0] || null;
}

function consecutiveNumsExist(
  firstNum: number,
  length: number,
  numCountMap: Map<number, number>
) {
  const lastNum = firstNum + length - 1;

  for (let num = firstNum; num <= lastNum; num++) {
    if (!numCountMap.has(num)) {
      return false;
    }

    const numCount = numCountMap.get(num)! - 1;

    if (numCount === 0) {
      numCountMap.delete(num);
    } else {
      numCountMap.set(num, numCount);
    }
  }

  return true;
}
