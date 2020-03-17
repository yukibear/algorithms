export default function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs.reduce((p, n) => (p.length < n.length ? p : n));

  for (const str of strs) {
    for (let i = prefix.length; i >= 0 && prefix !== ""; i--) {
      prefix = prefix.substring(0, i);

      if (str.indexOf(prefix) === 0) {
        break;
      }
    }
  }

  return prefix;
}
