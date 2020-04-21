export default function peakIndexInMountainArray(A: number[]): number {
  let l = 0;
  let r = A.length - 1;

  while (l < r) {
    const mid = (l + r) >>> 1;

    if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
      return mid;
    }

    if (A[mid] < A[mid + 1]) {
      l = mid;
    } else {
      r = mid;
    }
  }

  return r;
}
