export default function shortestToChar(
  str: string,
  char: string
): number[] {
  let rightIndex = Infinity;
  let leftIndex = -Infinity;
  let result = new Array(str.length);

  for (let i = 0; i < str.length; i++) {
    if ((rightIndex = str.indexOf(char, i)) === -1) rightIndex = Infinity;

    result[i] = Math.min(i - leftIndex, rightIndex - i);

    if (rightIndex === i) leftIndex = rightIndex;
  }

  return result;
}
