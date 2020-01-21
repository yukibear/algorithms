export default function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack: string[] = [];

  for (const char of s) {
    if (BRACKET_PAIR_MAP.has(char)) {
      stack.push(BRACKET_PAIR_MAP.get(char)!);
    } else if (stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
}

const BRACKET_PAIR_MAP = new Map([
  ["{", "}"],
  ["(", ")"],
  ["[", "]"]
]);
