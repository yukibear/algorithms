import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isPalindrome from "./isPalindrome.ts";

test("0009. Palindrome Number", () => {
  assertEquals(isPalindrome(121), true);
  assertEquals(isPalindrome(-121), false);
  assertEquals(isPalindrome(10), false);
});
