export default function twoSum(
  numbers: number[],
  target: number
): number[] {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const sum = numbers[i] + numbers[j];

    if (sum === target) {
      return [++i, ++j]
    }

    if (sum < target) {
      i++;
    } else {
      j--;
    }
  }

  return [];
}
