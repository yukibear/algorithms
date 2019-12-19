// for loop version
export default function minCostClimbingStairs(cost: number[]): number {
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  }

  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
}

// dp version
function minCostClimbingStairs2(cost: number[]): number {
  let dp = [0, cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    dp = [dp[1], dp[2], Math.min(dp[1], dp[2]) + cost[i]];
  }

  return Math.min(dp[1], dp[2]);
}
