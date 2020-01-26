export default function nextGreatestLetter(
  letters: string[],
  target: string
): string {
  let l = 0;
  let r = letters.length - 1;

  while (l <= r) {
    const mid = (l + r) >>> 1;

    if (letters[mid].charCodeAt(0) <= target.charCodeAt(0)) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return letters[l % letters.length];
}
