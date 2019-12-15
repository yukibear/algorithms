export default function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (OPEN_BRACKET_SET.has(char)) {
      stack.push(BRACKET_PAIR_MAP.get(char)!);
    } else if (stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
}

const BRACKET_PAIR_MAP = new Map([["{", "}"], ["(", ")"], ["[", "]"]]);
const OPEN_BRACKET_SET = new Set(BRACKET_PAIR_MAP.keys());
