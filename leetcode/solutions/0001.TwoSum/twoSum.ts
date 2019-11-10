

export default function twoSum(
    nums: number[],
    target: number
): [number, number] {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] + nums[i] === target) return [i - 1, i];
    }
    return [0, 1];
}