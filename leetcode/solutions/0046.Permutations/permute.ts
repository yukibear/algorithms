export function permute_BFS(nums: number[]): number[][] {
  const queue = [[[], nums]];
  const result: number[][] = [];

  while (queue.length > 0) {
    const [arr, nums] = queue.shift() || [];

    if (nums.length === 1) {
      const tmpArr = [...arr];
      tmpArr.push(nums[0]);
      result.push(tmpArr);

      continue;
    }

    for (const i of nums.keys()) {
      const tmpArr = [...arr];
      tmpArr.push(nums[i]);

      queue.push([tmpArr, nums.filter((_, index) => index !== i)]);
    }

  }

  return result;
}

export function permute_DFS(nums: number[]): number[][] {
  const result: number[][] = [];

  function dfs(seed: number[], targets: number[]): void {
    if (targets.length === 1) {
      const res = [...seed];
      res.push(targets[0]);
      result.push(res);

      return;
    }

    for (const i of targets.keys()) {
      const res = [...seed];
      res.push(targets[i]);
      dfs(res, targets.filter((_, ii) => ii !== i));
    }
  }

  dfs([], nums);

  return result;
}
