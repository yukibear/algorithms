import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import lengthOfLongestSubstring from "./lengthOfLongestSubstring.ts";

Deno.test("0003. Longest Substring Without Repeating Characters", () => {
  assertEquals(lengthOfLongestSubstring("abcabcbb"), 3);
  assertEquals(lengthOfLongestSubstring("bbbbb"), 1);
  assertEquals(lengthOfLongestSubstring("pwwkew"), 3);
  assertEquals(lengthOfLongestSubstring("dvdf"), 3);
});
