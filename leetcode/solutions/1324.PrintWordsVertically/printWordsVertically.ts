export default function printVertically(s: string,): string[] {
  const strs = s.split(" ");

  let maxLen = 0;
  strs.forEach((s) => {
    if (maxLen < s.length) {
      maxLen = s.length
    }
  });

  const result: string[] = Array.from({ length: maxLen }, _ => "");

    for (let i = 0; i < maxLen; i++) {
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
