export default function maxFreq(
  s: string,
  maxLetters: number,
  minSize: number,
  maxSize: number
): number {
  //s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4

  const map = new Map<string, number>();

  for (let size = minSize; size <= maxSize; size++) {
    for (let i = 0; i <= s.length - size; i++) {
      const str = s.slice(i, i + size);
      if (Array.from(new Set(str).values()).length > maxLetters) {
        continue;
      }
      map.set(str, (map.get(str) || 0) + 1);
    }
  }
  const res = Array.from(map.values()).sort((a, b) => b - a)[0];
  return (!res) ? 0 : res;
}
