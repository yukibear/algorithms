export default function lastStoneWeight(stones: number[]): number {
  stones.sort((a, b) => a - b);

  while (stones.length > 1) {
    const rest = stones.pop()! - stones.pop()!;

    if (rest !== 0) {
      insertStone(rest, stones);
    }
  }

  return stones[0] || 0;
}

function insertStone(s: number, stones: number[]) {
  let l = 0;
  let r = stones.length - 1;

  while (l <= r) {
    const mid = (l + r) >>> 1;

    if (stones[mid] === s) {
      stones.splice(mid, 0, s);
      return;
    }

    if (stones[mid] < s) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  stones.splice(l, 0, s);
}
