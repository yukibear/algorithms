export default function canJump(nums: number[]): boolean {
  let pos = 0;

  while (pos < nums.length) {
    const jump = nums[pos];

    if (pos + jump >= nums.length - 1) {
      return true;
    }

    let nextPos = pos;

    for (let tmpNextPos = pos + jump; tmpNextPos > pos; tmpNextPos--) {
      if (nextPos + nums[nextPos] < tmpNextPos + nums[tmpNextPos]) {
        nextPos = tmpNextPos;
      }
    }

    if (nextPos === pos) {
      return false;
    }

    pos = nextPos;
  }

  return true;
}
