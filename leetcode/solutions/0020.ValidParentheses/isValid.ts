export default function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack: string[] = [];

  for (const char of s) {
    const pair = BRACKET_PAIR_MAP.get(char);

    if (pair != null) {
      stack.push(pair);
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
