export default function tribonacci(n: number): number {
  const dp: [number, number, number] = [0, 1, 1];

  if (n < 3) {
    return dp[n];
  }

  for (let i = 3; i <= n; i++) {
    const num = dp[0] + dp[1] + dp[2];
    dp[0] = dp[1];
    dp[1] = dp[2];
    dp[2] = num;
  }

  return dp[2];
}
