import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findLHS from "./findLHS.ts";

test("0594. Longest Harmonious Subsequence", () => {
  assertEquals(findLHS([1, 3, 2, 2, 5, 2, 3, 7]), 5);
  assertEquals(findLHS([1, 2, 3, 4]), 2);
});
