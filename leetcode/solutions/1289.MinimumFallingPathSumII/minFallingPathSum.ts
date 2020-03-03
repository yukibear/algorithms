export default function minFallingPathSum(
  arr: number[][]
): number {
  let dp: number[][] = [...arr[0]].sort((a, b) => a - b).slice(0, 2).map(
    n => [n, n]
  );

  for (let i = 1; i < arr.length; i++) {
    let tmp: number[][] = [[0, Infinity], [0, Infinity]];

    for (let j = 0; j < arr.length; j++) {
      const num = arr[i][j];
      let sum = num;

      if (dp[0][0] !== arr[i - 1][j]) {
        sum += dp[0][1];
      } else {
        sum += dp[1][1];
      }

      if (sum < tmp[1][1]) {
        if (sum < tmp[0][1]) {
          tmp[1] = tmp[0];
          tmp[0] = [num, sum];
        } else {
          tmp[1] = [num, sum];
        }
      }
    }

    dp = tmp;
  }

  return dp[0][1];
}
