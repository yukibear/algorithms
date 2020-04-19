import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import reformat from "./reformat.ts";

Deno.test("1417. Reformat The String", () => {
  type test = [string, string];
  const tests: test[] = [
    ["a0b1c2", "a0b1c2"],
    ["leetcode", ""],
    ["1229857369", ""],
    ["covid2019", "c2o0v1i9d"],
    ["ab123", "1a2b3"],
  ];

  for (const [arg, want] of tests) {
    assertEquals(reformat(arg), want);
  }
});
