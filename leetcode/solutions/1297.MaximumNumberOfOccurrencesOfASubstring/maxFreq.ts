export default function maxFreq(
  s: string,
  maxLetters: number,
  minSize: number,
  maxSize: number
): number {
  // actually we do NOT need maxSize
  // because larger substring cannot beat smaller

  const strCountMap = new Map<string, number>();

  for (let i = 0, last = s.length - minSize; i <= last; i++) {
    const str = s.slice(i, i + minSize);

    if (new Set(str).size > maxLetters) {
      continue;
    }

    strCountMap.set(str, (strCountMap.get(str) || 0) + 1);
  }

  return [...strCountMap.values()].sort((a, b) => b - a)[0] || 0;
}
