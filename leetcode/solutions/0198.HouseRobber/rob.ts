export default function rob(nums: number[]): number {
  let dp = [nums[0], nums[1]];

  for (let i = 2; i < nums.length; i++) {
    let tmp = dp[1];
    dp[1] = Math.max(dp[0] + nums[i], dp[1]);
    dp[0] = tmp;
  }

  return Math.max(dp[0], dp[1]);
}
