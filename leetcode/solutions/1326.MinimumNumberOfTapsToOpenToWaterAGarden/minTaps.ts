export default function minTaps(n: number, ranges: number[]): number {
  for (const [i, range] of ranges.entries()) {
    if (i === 0) {
      continue;
    }

    if (ranges[i] > i) {
      ranges[0] = Math.max(ranges[0], range + i);
    } else {
      const from = i - ranges[i];
      ranges[from] = Math.max(ranges[from], range * 2);
    }

    ranges[i] = 0;
  }

  let count = 0;
  let farthest = 0;
  let lastFarthest = 0;

  for (const [i, range] of ranges.entries()) {
    if (range !== 0) {
      farthest = Math.max(farthest, i + range);
    }

    if (i === lastFarthest && i !== ranges.length - 1) {
      if (farthest === i) {
        return -1;
      }

      count++;
      lastFarthest = farthest;
    }
  }

  return count;
}
