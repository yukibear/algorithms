export default function isValid(str: string): boolean {
  const stack: string[] = [];

  for (const char of str) {
    if (!CLOSING_BRACKET_PAIR_MAP.has(char)) {
      stack.push(char);

      continue;
    }

    if (stack.pop() !== CLOSING_BRACKET_PAIR_MAP.get(char)) {
      return false;
    }
  }

  return stack.length === 0;
}

const CLOSING_BRACKET_PAIR_MAP = new Map([
  ["}", "{"],
  [")", "("],
  ["]", "["]
]);
