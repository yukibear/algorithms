import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import palindromePartition from "./palindromePartition.ts";

test("5278. Palindrome Partitioning III", () => {
  assertEquals(palindromePartition("abc", 2), 1);
  assertEquals(palindromePartition("aabbc", 3), 0);
  assertEquals(palindromePartition("leetcode", 8), 0);
});
