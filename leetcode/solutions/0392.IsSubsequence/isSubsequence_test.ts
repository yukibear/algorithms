import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isSubsequence from "./isSubsequence.ts";

Deno.test("0392. Is Subsequence", () => {
  assertEquals(isSubsequence("abc", "ahbgdc"), true);
  assertEquals(isSubsequence("axc", "ahbgdc"), false);
});
