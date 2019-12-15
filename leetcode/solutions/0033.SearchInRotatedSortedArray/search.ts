export default function search(
  nums: number[],
  target: number
): number {

  const search = (from: number, to: number): number => {
    if (to - from < 2) {
      if (nums[from] === target) return from;
      if (nums[to] === target) return to;
      return -1;
    }

    const middle = Math.floor((from + to) / 2);
    const [first, pivot, last] = [nums[from], nums[middle], nums[to]];

    if (target === pivot) return middle;
    if (first < last) {
      return target < pivot ? search(from, middle - 1) : search(middle + 1, to);
    } else {
      if (
        first < pivot && first <= target && target < pivot
        || first > pivot && (first <= target || target < pivot)
      ) {
        return search(from, middle - 1);
      } else {
        return search(middle + 1, to);
      }
    }
  }

  return search(0, nums.length - 1);
}
