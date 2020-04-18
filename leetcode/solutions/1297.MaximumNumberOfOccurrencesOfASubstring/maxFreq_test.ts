import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maxFreq from "./maxFreq.ts";

Deno.test("1297. Maximum Number of Occurrences of a Substring", () => {
  assertEquals(maxFreq("aababcaab", 2, 3, 4), 2);
  assertEquals(maxFreq("aaaa", 1, 3, 3), 2);
  assertEquals(maxFreq("aabcabcab", 2, 2, 3), 3);
  assertEquals(maxFreq("abcde", 2, 3, 3), 0);
  assertEquals(maxFreq("bccaabac", 2, 2, 2), 1);
});
