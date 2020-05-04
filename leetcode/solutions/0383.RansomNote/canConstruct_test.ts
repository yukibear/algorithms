import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import canConstruct from "./canConstruct.ts";

Deno.test("0383. Ransom Note", () => {
  type test = [[string, string], boolean];
  const tests: test[] = [
    [["a", "b"], false],
    [["aa", "ab"], false],
    [["aa", "aab"], true],
    [["abc", "aab"], false],
  ];

  for (const [args, want] of tests) {
    assertEquals(canConstruct(...args), want);
  }
});
