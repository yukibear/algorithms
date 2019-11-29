/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
export default function shortestToChar(
  str: string,
  char: string
): number[] {
  let rightIndex;
  let leftIndex = -Infinity;
  let result = new Array(str.length);

  for (let i = 0; i < str.length; i++) {
    rightIndex = str.indexOf(char, i);
    result[i] = rightIndex !== -1 ? Math.min(i - leftIndex, rightIndex - i) : i - leftIndex
    if (rightIndex === i) leftIndex = rightIndex;
  }

  return result;
}
