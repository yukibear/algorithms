export default function longestPalindrome(
  str: string
): number {
  let length = 0;
  const set = new Set<string>();
  for (const s of str) {
    if (!set.has(s)) {
      set.add(s);
      continue;
    }

    length += 2;
    set.delete(s);
  }
  return length + (set.size ? 1 : 0);
}
