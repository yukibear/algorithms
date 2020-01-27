export default function removePalindromeSub(s: string): number {
  let count = 0;

  while (s.length > 0) {
    let half = Math.floor(s.length / 2);

    for (let end = half; end >= 0; end--) {
      const str1 = s.slice(0, end);
      if (str1 === "") {
        count++;
        return count;
      }
      const str2 = str1
        .split("")
        .reverse()
        .join("");

      const lastIndex = s.lastIndexOf(str2, str1.length);
      if (lastIndex === -1) {
        continue;
      }
      s = s.substring(0, lastIndex) + s.substring(lastIndex + str2.length);
      s = s.substring(str1.length);
      count++;
    }
  }

  return count;
}
