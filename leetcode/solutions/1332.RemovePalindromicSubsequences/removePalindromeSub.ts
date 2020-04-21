export default function removePalindromeSub(s: string): number {
  if (s.length === 0) {
    return 0;
  }

  const seek = s
    .substr(Math.ceil(s.length / 2))
    .split("")
    .reverse()
    .join("");

  return s.indexOf(seek) === 0 ? 1 : 2;
}
