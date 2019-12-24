export default function twoSum(
  numbers: number[],
  target: number
): number[] {
  let j = numbers.length - 1;

  for (let i = 0; i < numbers.length; i++) {
    const pair = target - numbers[i];

    for (; j > i; j--) {
      const check = numbers[j];

      if (check < pair) {
        break;
      }
      if (check === pair) {
        return [++i, ++j]
      }
    }
  }

  return [];
}
