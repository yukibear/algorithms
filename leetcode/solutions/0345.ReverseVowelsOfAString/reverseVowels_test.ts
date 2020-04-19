import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import reverseVowels from "./reverseVowels.ts";

Deno.test("0345. Reverse Vowels of a String", () => {
  type test = [string, string];
  const tests: test[] = [
    ["hello", "holle"],
    ["leetcode", "leotcede"],
    ["aA", "Aa"],
  ];

  for (const [got, want] of tests) {
    assertEquals(reverseVowels(got), want);
  }
});
