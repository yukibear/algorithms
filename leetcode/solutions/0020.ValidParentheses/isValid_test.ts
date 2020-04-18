import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isValid from "./isValid.ts";

Deno.test("0020. Valid Parentheses", () => {
  assertEquals(isValid("()"), true);
  assertEquals(isValid("()[]{}"), true);
  assertEquals(isValid("(]"), false);
  assertEquals(isValid("([)]"), false);
  assertEquals(isValid("{[]}"), true);
});
