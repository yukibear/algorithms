export default function sortedSquares(A: number[]): number[] {
  let arr1: number[] = [];
  let arr2: number[] = [];

  for (let i = 0; i < A.length; i++) {
    const num = A[i];

    if (num >= 0) {
      arr1.push(num ** 2);
    } else {
      arr2.push(num ** 2);
    }
  }

  let j = arr2.length - 1;

  for (let i = 0; i < arr1.length && j >= 0; i++) {
    while (arr1[i] <= arr2[j]) {
      i++;
    }

    arr1.splice(i, 0, arr2[j]);
    j--;
  }

  for (; j >= 0; j--) {
    arr1.push(arr2[j]);
  }

  return arr1;
}

export function sortedSquares_OneLiner(A: number[]): number[] {
  return A.map(n => n * n).sort((a, b) => a - b);
}
