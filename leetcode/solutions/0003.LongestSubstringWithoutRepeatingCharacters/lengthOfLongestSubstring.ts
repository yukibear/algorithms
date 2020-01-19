export default function lengthOfLongestSubstring(s: string): number {
  let max = 0;

  for (let i = 0; i < s.length && i + max < s.length; i++) {
    const charSet = new Set<string>();

    for (let j = i; j < s.length && !charSet.has(s[j]); j++) {
      charSet.add(s[j]);
    }

    max = Math.max(max, charSet.size);
  }

  return max;
}
