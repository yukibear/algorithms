export default function twoSum(
  numbers: number[],
  target: number
): number[] {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const small = numbers[i];
    const large = numbers[j]
    const diff = target - small;

    if (large === diff) {
      return [++i, ++j]
    }
    if (large < diff) {
      i++;
      continue;
    }

    j--;
  }

  return [];
}
