// **This problem is written in Japanese
// https://tayama-2.hatenadiary.org/entry/20111210/1323502092
export function minChange_DP(value: number[], n: number): number {
  const dp: number[] = Array.from({ length: n + 1 }, () => Infinity);
  dp[0] = 0;

  for (let price = 0; price <= n; price++) {
    for (const val of value) {
      if (price - val < 0) {
        break;
      }

      dp[price] = Math.min(dp[price - val] + 1, dp[price]);
    }
  }

  return dp[n];
}

export function minChange_DFS(values: number[], n: number): number {
  values.sort((a, b) => b - a);

  function dfs(rest: number, count: number, i: number): number {
    const newCount = count + Math.floor(rest / values[i]);

    if (rest % values[i] === 0) {
      return newCount;
    }

    if (i === values.length - 1) {
      return -1;
    }

    const result = dfs(rest % values[i], newCount, i + 1);

    return result !== -1 ? result : dfs(rest, count, i + 1);
  }

  return dfs(n, 0, 0);
}
