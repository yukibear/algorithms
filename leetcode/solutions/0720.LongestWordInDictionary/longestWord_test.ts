import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import longestWord from "./longestWord.ts";

test("0720. Longest Word in Dictionary", () => {
  assertEquals(longestWord(["w","wo","wor","worl", "world"]), "world");
  assertEquals(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]), "apple");
  assertEquals(longestWord(["vsw","vs","zwu","vsx","nc","o","vswus","orv","imf","i","v","zw","vs"]), "vsw");
});
