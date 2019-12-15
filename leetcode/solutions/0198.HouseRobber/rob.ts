export default function rob(
  nums: number[]
): number {

  let dp = new Array(nums.length + 2);
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i < nums.length+2; i++) {
    dp[i] = Math.max((dp[i-2] + nums[i-2]), dp[i-1]);
  }
  return (dp[dp.length-2] > dp[dp.length-1]) ? dp[dp.length-2] : dp[dp.length-1];
}
