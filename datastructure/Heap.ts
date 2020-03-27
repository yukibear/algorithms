export const maxHeapCompairer = (a: number, b: number) => b - a;
export const minHeapCompairer = (a: number, b: number) => a - b;

export function buildMaxHeap(nums: number[]) {
  buildHeap(nums, maxHeapCompairer);
}

export function buildMinHeap(nums: number[]) {
  buildHeap(nums, minHeapCompairer);
}

function buildHeap(nums: number[], compairer: Function) {
  for (let i = Math.floor(nums.length / 2); i >= 0; i--) {
    heapify(nums, i, compairer);
  }
}

export function heapify(nums: number[], i: number, compairer: Function) {
  const left = i * 2 + 1;
  const right = i * 2 + 2;
  let tmp = i;

  if (left < nums.length && compairer(nums[i], nums[left]) > 0) {
    tmp = left;
  }

  if (right < nums.length && compairer(nums[tmp], nums[right]) > 0) {
    tmp = right;
  }

  if (tmp !== i) {
    [nums[i], nums[tmp]] = [nums[tmp], nums[i]];
    heapify(nums, tmp, compairer);
  }
}

export function popMaxHeap(nums: number[]) {
  [nums[0], nums[nums.length - 1]] = [nums[nums.length - 1], nums[0]];
  const max = nums.pop();
  heapify(nums, 0, maxHeapCompairer);

  return max;
}

export function popMinHeap(nums: number[]) {
  [nums[0], nums[nums.length - 1]] = [nums[nums.length - 1], nums[0]];
  const min = nums.pop();
  heapify(nums, 0, minHeapCompairer);

  return min;
}

export function pushMaxHeap(nums: number[], num: number) {
  nums.push(num);
  buildHeap(nums, maxHeapCompairer);
}

export function pushMinHeap(nums: number[], num: number) {
  nums.push(num);
  buildHeap(nums, minHeapCompairer);
}
