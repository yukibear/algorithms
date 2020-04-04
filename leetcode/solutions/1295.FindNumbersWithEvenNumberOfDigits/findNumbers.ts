export default function findNumbers(nums: number[]): number {
  return nums.filter(n => Math.floor(Math.log10(n)) % 2 !== 0).length;
}
