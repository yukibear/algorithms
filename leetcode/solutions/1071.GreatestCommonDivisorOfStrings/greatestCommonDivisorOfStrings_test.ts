import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import gcdOfStrings from "./gcdOfStrings.ts";

test("1071. Greatest Common Divisor of Strings", () => {
  assertEquals(gcdOfStrings("ABCABC", "ABC"), "ABC");
  assertEquals(gcdOfStrings("ABABAB", "ABAB"), "AB");
  assertEquals(gcdOfStrings("LEET", "CODE"), "");
});
