export default function sortedSquares(A: number[]): number[] {
  let arr1: number[] = [];
  let arr2: number[] = [];

  for (let i = 0; i < A.length; i++) {
    const num = A[i];

    if (num < 0) {
      arr1.unshift(num * num);
    } else {
      arr2.push(num * num);
    }
  }

  if (arr1.length < arr2.length) {
    [arr1, arr2] = [arr2, arr1];
  }

  let j = 0;

  for (let i = 0; i < arr1.length && j < arr2.length; i++) {
    while (arr1[i] <= arr2[j]) {
      i++;
    }

    arr1.splice(i, 0, arr2[j]);
    j++;
  }

  if (j < arr2.length) {
    return arr1.concat(arr2.slice(j));
  }

  return arr1;
}

export function sortedSquares_OneLiner(A: number[]): number[] {
  return A.map(n => n * n).sort((a, b) => a - b);
}
