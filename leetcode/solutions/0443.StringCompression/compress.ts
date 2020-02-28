export default function compress(
  chars: string[]
): number {
  let count = 0;
  let cursor = 0;

  for (const [i, char] of chars.entries()) {
    count++;

    if (i === chars.length - 1 || char !== chars[i + 1]) {
      chars[cursor] = char;
      cursor++;

      if (count !== 1) {
        count.toString().split("").forEach(c => {
          chars[cursor] = c;
          cursor++;
        });
      }

      count = 0;
    }
  }

  return cursor;
}
