export default function maxJumps(arr: number[], d: number): number {
  const indices: number[] = [...arr].map((n, i) => [n, i])
    .sort(([a,], [b,]) => b - a).map(([, i]) => i);
  const dp: number[] = new Array(arr.length);
  let result = 0;

  for (const i of indices) {
    result = Math.max(result, dfs(i));
  }

  function dfs(i: number): number {
    if (dp[i]) {
      return dp[i];
    }

    let max = 0;
    let goLeft = true;
    let goRight = true;

    for (let jump = 1; jump <= d && (goLeft || goRight); jump++) {
      let left = 0;
      let right = 0;

      if (goLeft && (goLeft = jumpable(arr, i, i - jump))) {
        left = dfs(i - jump);
      }

      if (goRight && (goRight = jumpable(arr, i, i + jump))) {
        right = dfs(i + jump);
      }

      max = Math.max(max, left, right);
    }

    dp[i] = max + 1;

    return dp[i];
  }

  return result;
}

function jumpable(nums: number[], i: number, j: number) {
  if (j < 0 || j >= nums.length) {
    return false;
  }

  if (nums[i] === nums[j]) {
    return false;
  }

  if (i < j) {
    for (let k = i + 1; k <= j; k++) {
      if (nums[i] <= nums[k]) {
        return false;
      }
    }
  } else {
    for (let k = i - 1; k >= j; k--) {
      if (nums[i] <= nums[k]) {
        return false;
      }
    }
  }

  return true;
}
