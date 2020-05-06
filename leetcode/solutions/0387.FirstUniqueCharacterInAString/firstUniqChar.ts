export default function firstUniqChar(s: string): number {
  const firstCharIndices = Array.from({ length: 26 }, () => 0);
  const distinct = Array.from({ length: s.length }, () => false);
  const a = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    const j = s.charCodeAt(i) - a;
    const firstIndex = firstCharIndices[j];

    if (firstIndex === 0) {
      firstCharIndices[j] = i + 1;
      distinct[i] = true;
    } else {
      distinct[firstIndex - 1] = false;
    }
  }

  for (const [i, isDistinct] of distinct.entries()) {
    if (isDistinct) {
      return i;
    }
  }
  return -1;
}
