export default function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  candidates.sort((a, b) => a - b);

  return backtrack(candidates, target, 0, 0, [], []);
}

function backtrack(
  candidates: number[],
  target: number,
  i: number,
  sum: number,
  nums: number[],
  result: number[][]
): number[][] {
  const num = candidates[i];
  sum += num;
  nums.push(num);

  if (sum === target) {
    result.push([...nums]);

    return result;
  }

  if (sum > target) {
    return result;
  }

  if (i === candidates.length) {
    return result;
  }

  backtrack(candidates, target, i, sum, nums, result);

  if (nums.length < 2) {
    return result;
  }

  sum -= num;
  nums.pop();
  nums.pop();

  return backtrack(candidates, target, i + 1, sum, nums, result);
}
