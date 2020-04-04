export default function minFallingPathSum(
  arr: number[][]
): number {
  let dp: number[][] = [...arr[0]].sort((a, b) => a - b).slice(0, 2).map(
    n => [n, n]
  );

  for (let i = 1; i < arr.length; i++) {
    let minSums: number[][] = [[0, Infinity], [0, Infinity]];

    for (let j = 0; j < arr.length; j++) {
      if (dp[0][0] !== arr[i - 1][j]) {
        updateMinValue(minSums, arr[i][j], dp[0][1]);
      } else {
        updateMinValue(minSums, arr[i][j], dp[1][1]);
      }
    }

    dp = minSums;
  }

  return dp[0][1];
}

function updateMinValue(minSums: number[][], num: number, prevSum: number) {
  let sum = num + prevSum;

  if (sum < minSums[1][1]) {
    if (sum < minSums[0][1]) {
      minSums[1] = minSums[0];
      minSums[0] = [num, sum];
    } else {
      minSums[1] = [num, sum];
    }
  }

  return minSums;
}
