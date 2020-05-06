import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import firstUniqChar from "./firstUniqChar.ts";

Deno.test("0387. First Unique Character in a String", () => {
  type test = [string, number];
  const tests: test[] = [
    ["leetcode", 0],
    ["loveleetcode", 2],
  ];

  for (const [arg, want] of tests) {
    assertEquals(firstUniqChar(arg), want);
  }
});
