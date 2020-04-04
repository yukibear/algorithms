export default function jump(nums: number[]): number {
  const dp = new Map<number, number>([[0, 0]]);
  let checked = 0;

  for (const i of nums.keys()) {
    const jump = nums[i];

    for (let j = jump; i + j > checked; j--) {
      dp.set(i + j, Math.min(dp.get(i)! + 1, dp.get(i + j) || Infinity));
    }

    checked = i + jump;
  }

  return dp.get(nums.length - 1)!;
}
