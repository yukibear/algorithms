export default function moveZeroes(nums: number[]): void {
  let insertPos = 0;
    for (const num of nums) {
        if (num !== 0) nums[insertPos++] = num;
    }

    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    }
}
