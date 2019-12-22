export default function findNumbers(
  nums: number[]
): number {
  let count = 0;

  for (const num of nums) {
    if (~~Math.log10(num) % 2 === 1) {
      count++;
    }
  }

  return count;
}
