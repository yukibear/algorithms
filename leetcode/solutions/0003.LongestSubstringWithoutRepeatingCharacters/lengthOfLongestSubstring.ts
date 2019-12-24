export default function lengthOfLongestSubstring(
  s: string
): number {
  let max = 0;

  for (let start = 0; start < s.length; start++) {
    const set = new Set<string>();
    let i = 0;

    while (start + i < s.length && !set.has(s[start + i])) {
      set.add(s[start + i]);
      i++;
    }

    max = Math.max(max, i);
  }

  return max;
}
