export default function shortestToChar(str: string, target: string): number[] {
  let result = new Array(str.length);

  if (str[0] === target) {
    result[0] = 0;
  } else {
    result[0] = Infinity;
  }

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== target) {
      result[i] = result[i-1] + 1;

      continue;
    }

    result[i] = 0;

    for (let j = 1; j < i + 1 && result[i - j] > j; j++) {
      result[i - j] = j;
    }
  }

  return result;
}

export function shortestToChar_another(str: string, target: string): number[] {
  let rightIndex = -1;
  let leftIndex = -Infinity;
  let result = new Array(str.length);

  for (let i = 0; i < str.length; i++) {
    if (i > rightIndex && (rightIndex = str.indexOf(target, i)) === -1) {
      rightIndex = Infinity;
    }

    result[i] = Math.min(i - leftIndex, rightIndex - i);

    if (rightIndex === i) {
      leftIndex = rightIndex;
    }
  }

  return result;
}
