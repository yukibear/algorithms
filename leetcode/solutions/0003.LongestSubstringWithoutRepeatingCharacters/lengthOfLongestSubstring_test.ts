import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import lengthOfLongestSubstring from "./lengthOfLongestSubstring.ts";

test("0003. Longest Substring Without Repeating Characters", () => {
  assertEquals(lengthOfLongestSubstring("abcabcbb"), 3);
  assertEquals(lengthOfLongestSubstring("bbbbb"), 1);
  assertEquals(lengthOfLongestSubstring("pwwkew"), 3);
});
