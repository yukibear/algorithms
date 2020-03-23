import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import generateParenthesis from "./generateParenthesis.ts";

const sorter = (a: string, b: string) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      continue;
    }

    return a[i] === "(" ? -1 : 1;
  }

  return 0;
};

Deno.test("0022. Generate Parentheses", () => {
  assertEquals(
    generateParenthesis(3).sort(sorter),
    ["((()))", "(()())", "(())()", "()(())", "()()()"].sort(sorter)
  );

  assertEquals(
    generateParenthesis(4).sort(sorter),
    [
      "(((())))",
      "((()()))",
      "((())())",
      "((()))()",
      "(()(()))",
      "(()()())",
      "(()())()",
      "(())(())",
      "(())()()",
      "()((()))",
      "()(()())",
      "()(())()",
      "()()(())",
      "()()()()",
    ].sort(sorter)
  );
});
