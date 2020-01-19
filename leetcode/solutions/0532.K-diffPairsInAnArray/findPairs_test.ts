import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findPairs from "./findPairs.ts";

test("0532. K-diff Pairs in an Array", () => {
  assertEquals(findPairs([3, 1, 4, 1, 5], 2), 2);
  assertEquals(findPairs([1, 2, 3, 4, 5], 1), 4);
  assertEquals(findPairs([1, 3, 1, 5, 4], 0), 1);
  assertEquals(findPairs([1, 2, 3, 4, 5], -1), 0);
});
