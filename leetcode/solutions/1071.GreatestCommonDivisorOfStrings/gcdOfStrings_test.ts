import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import gcdOfStrings from "./gcdOfStrings.ts";

Deno.test("1071. Greatest Common Divisor of Strings", () => {
  assertEquals(gcdOfStrings("ABCABC", "ABC"), "ABC");
  assertEquals(gcdOfStrings("ABABAB", "ABAB"), "AB");
  assertEquals(gcdOfStrings("LEET", "CODE"), "");
  assertEquals(gcdOfStrings("AAAA", "AA"), "AA");
  assertEquals(gcdOfStrings("AAAA", "AAA"), "A");
});
