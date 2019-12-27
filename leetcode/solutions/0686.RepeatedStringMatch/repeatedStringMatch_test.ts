import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import repeatedStringMatch from "./repeatedStringMatch.ts";

test("0686. Repeated String Match", () => {
  assertEquals(repeatedStringMatch("abcd", "cdabcdab"), 3);
  assertEquals(repeatedStringMatch("a", "aa"), 2);
  assertEquals(repeatedStringMatch("aa", "a"), 1);
  assertEquals(repeatedStringMatch("aaac", "aac"), 1);
  assertEquals(repeatedStringMatch("abc", "cabcabca"), 4);
  assertEquals(repeatedStringMatch("aaaaaaaaaaaaaaaaaaaaaab", "ba"), 2);
  assertEquals(repeatedStringMatch("abcd", "abcdb"), -1);
  assertEquals(repeatedStringMatch("abcd", "cdabcdacdabcda"), -1);
});
