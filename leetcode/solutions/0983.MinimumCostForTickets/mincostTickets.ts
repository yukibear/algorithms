export default function mincostTickets(
  days: number[],
  costs: [number, number, number]
): number {
  const [c1, c7, c30] = [...costs];

  const daySet = new Set([...days]);
  const max = days[days.length - 1] + 30;
  const dp = new Array(days.length + 30).fill(0);

  for (let i = 31; i <= max; i++) {
    if (!daySet.has(i - 30)) {
      dp[i] = dp[i - 1];
      continue;
    }

    dp[i] = Math.min(dp[i-1] + c1, dp[i-7] + c7, dp[i-30] + c30);
  }

  return dp[dp.length - 1];
}
