export default function printVertically(s: string): string[] {
  const strs = s.split(" ");
  const maxLen = Math.max(...strs.map(s => s.length));
  const result: string[] = Array.from({ length: maxLen }, _ => "");

  for (let i = maxLen - 1; i >= 0; i--) {
    for (const str of strs) {
      if (str[i] != null) {
        result[i] += str[i];
      } else {
        result[i] += " ";
      }
    }
  }
  return result.map(s => s.replace(/ *$/, ""));
}
