export default function isPossibleDivide(nums: number[], len: number): boolean {
  if (nums.length === 0 || nums.length % len !== 0) {
    return false;
  }

  const numCountMap = new Map<number, number>();

  for (const num of nums) {
    numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
  }

  let keys: number[];

  do {
    keys = Array.from(numCountMap.keys()).sort((a, b) => a - b);

    if (!checkConsecutiveNums(keys[0], len, numCountMap)) {
      return false;
    }

  } while (keys.length > 0);


  return true;
}

function checkConsecutiveNums(
  firstNum: number,
  length: number,
  numCountMap: Map<number, number>
) {
  const lastNum =  firstNum + length - 1;

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
