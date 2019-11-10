/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
export default function mincostTickets(
  days: number[],
  costs: [number, number, number]
): number {
  const [c1, c7, c30] = [...costs];

  let daySet = new Set([...days]);
  let dp = new Array(days.length + 30).fill(0);
  const max = days[days.length - 1] + 30;
  let j = 0;
  for (let i = 31; i <= max; i++) {
    j++;
    if (!daySet.has(i - 30)) {
      dp[i] = dp[i - 1];
      continue;
    }

    dp[i] = Math.min(dp[i-1] + c1, dp[i-7] + c7, dp[i-30] + c30);
  }

  return dp[dp.length - 1];
}
