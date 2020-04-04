export default function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function dfs(head: number[], i: number): void {
    if (nums.length <= i) {
      result.push(head);
      return;
    }

    dfs([...head], i + 1);

    const res1 = [...head];
    res1.push(nums[i]);

    dfs(res1, i + 1);
  }

  dfs([], 0);

  return result;
}
