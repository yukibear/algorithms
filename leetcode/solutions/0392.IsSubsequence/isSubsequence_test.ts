import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isSubsequence from "./isSubsequence.ts";

test("0392. Is Subsequence", () => {
  assertEquals(isSubsequence("abc", "ahbgdc"), true);
  assertEquals(isSubsequence("axc", "ahbgdc"), false);
});
