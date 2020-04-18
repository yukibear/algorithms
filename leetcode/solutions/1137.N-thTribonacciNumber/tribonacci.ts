export default function tribonacci(n: number): number {
  let dp: [number, number, number] = [0, 1, 1];

  if (n < 3) {
    return dp[n];
  }

  for (let i = 3; i <= n; i++) {
    dp = [dp[1], dp[2], dp[0] + dp[1] + dp[2]];
  }

  return dp[2];
}
