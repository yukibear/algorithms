export default function validMountainArray(nums: number[]): boolean {
  if (nums.length < 3) {
    return false;
  }

  const peak = Math.max(...nums);
  let climbing = true;
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];

    if (prev === current) {
      return false;
    }
    if ((climbing && prev > current) || (!climbing && prev < current)) {
      return false;
    }
    if (current === peak) {
      climbing = false;
    }

    prev = current;
  }

  return nums[nums.length - 2] > nums[nums.length - 1];
}
