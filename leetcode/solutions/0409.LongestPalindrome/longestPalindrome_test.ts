import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import longestPalindrome from "./longestPalindrome.ts";

test("0409. Longest Palindrome", () => {
  assertEquals(longestPalindrome("abccccdd"), 7);
});
