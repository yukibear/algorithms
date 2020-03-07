import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import wordBreak from "./wordBreak.ts";

Deno.test("0139. Word Break", () => {
  assertEquals(wordBreak("leetcode", ["leet", "code"]), true);
  assertEquals(wordBreak("applepenapple", ["apple", "pen"]), true);
  assertEquals(
    wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]),
    false
  );
  assertEquals(wordBreak("cbca", ["bc", "ca"]), false);
});
