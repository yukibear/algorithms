import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import longestCommonPrefix from "./longestCommonPrefix.ts";

test("0014. Longest Common Prefix", () => {
  assertEquals(longestCommonPrefix(["flower","flow","flight"]), "fl");
  assertEquals(longestCommonPrefix(["dog","racecar","car"]), "");
});
