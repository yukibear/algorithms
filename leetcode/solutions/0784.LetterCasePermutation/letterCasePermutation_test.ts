import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import letterCasePermutation from "./letterCasePermutation.ts";

Deno.test("0784. Letter Case Permutation", () => {
  assertEquals(
    letterCasePermutation("a1b2"),
    ["a1b2", "a1B2", "A1b2", "A1B2"]
  );
  assertEquals(letterCasePermutation("3z4"), ["3z4", "3Z4"]);
  assertEquals(letterCasePermutation("12345"), ["12345"]);
});
