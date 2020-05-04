export default function canConstruct(
  ransomNote: string,
  magazine: string
): boolean {
  const charCount: number[] = Array.from({ length: 26 }, () => 0);
  const base = "a".charCodeAt(0);

  for (let i = 0; i < magazine.length; i++) {
    charCount[magazine.charCodeAt(i) - base]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const index = ransomNote.charCodeAt(i) - base;
    charCount[index]--;

    if (charCount[index] < 0) {
      return false;
    }
  }

  return true;
}
