export default function minTaps(n: number, ranges: number[]): number {
  const dp: number[] = [];
  let toCover: number | null = null;

  for (const i of ranges.keys()) {
    const range = ranges[i];
    console.log(dp);

    if (range === 0) {
      if (dp[i] == null && toCover == null) {
        toCover = i;
      }

      continue;
    }

    // if a range covers all previous area
    if (range >= i) {
      dp[i] = 1;
      toCover = null;
      fillFarther(dp, i, range, dp[i]);

      continue;
    }

    if (dp[i] == null) {
      if (toCover != null && toCover >= i - range) {
        toCover = null;
      }

      if (dp[i - range - 1] != null) {
        dp[i] = dp[i - range - 1] + 1;
        fillFarther(dp, i, range, dp[i]);
      }

      continue;
    }
    if (i === 6) {
      console.log(i, range, dp[i], dp[i - range - 1]);
    }
    if (dp[i - range - 1] != null) {
      if (dp[i] >= dp[i - range - 1] + 1) {
        dp[i] = dp[i - range - 1] + 1;
        fillFarther(dp, i, range, dp[i]);
      } else {
        console.log(i, dp[i] + 1, range);

        fillFarther(dp, i, range, dp[i] + 1);
      }
    }
  }
  console.log(toCover, dp);

  return toCover === null ? dp[n] : -1;
}

function fillFarther(
  dp: number[],
  fromIndex: number,
  range: number,
  count: number
) {
  for (let i = 1; i <= range; i++) {
    if (dp[fromIndex + i] == null) {
      dp[fromIndex + i] = count;
    } else {
      dp[fromIndex + i] = Math.min(dp[fromIndex + i], count);
    }
  }
}
