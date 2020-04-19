export default function reverseVowels(s: string): string {
  const str = s.split("");
  let left = 0;
  let right = str.length - 1;

  for (; left < right; left++, right--) {
    for (; left < right && !VOWELS.has(str[left]); left++) {}
    for (; left < right && !VOWELS.has(str[right]); right--) {}

    const tmp = str[left];
    str[left] = str[right];
    str[right] = tmp;
  }

  return str.join("");
}

const VOWELS = new Set<string>([
  "A",
  "a",
  "I",
  "i",
  "U",
  "u",
  "E",
  "e",
  "O",
  "o",
]);
