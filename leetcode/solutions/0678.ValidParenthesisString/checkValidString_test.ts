import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import checkValidString from "./checkValidString.ts";

Deno.test("0678. Valid Parenthesis String", () => {
  type test = [string, boolean];
  const tests: test[] = [
    ["", true],
    ["(", false],
    [")", false],
    ["()", true],
    ["()()", true],
    [")*(", false],
    ["*(()", false],
    ["(*)", true],
    ["(*))", true],
    ["((*)", true],
    ["()*)*)", true],
    ["())", false],
    ["*)**", true],
    ["(*()", true],
  ];

  for (const [arg, want] of tests) {
    assertEquals(checkValidString(arg), want);
  }
});
