export default function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map();

  for (const str of strs) {
    const key = [...str].sort().join("");
    const strs = map.get(key) || [];
    strs.push(str);
    map.set(key, strs);
  }

  return [...map.values()];
}
