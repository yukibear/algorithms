import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import balancedStringSplit from "./balancedStringSplit.ts";

Deno.test("1221. Split a String in Balanced Strings", () => {
  type test = [string, number];
  const tests: test[] = [
    ["RLRRLLRLRL", 4],
		["RLLLLRRRLR", 3],
		["LLLLRRRR", 1],
		["RLRRRLLRLL", 2],
  ];

  for (const [arg, want] of tests) {
    assertEquals(balancedStringSplit(arg), want);
  }
});
