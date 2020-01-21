import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findMin from "./findMin.ts";

test("0153. Find Minimum in Rotated Sorted Array", () => {
  assertEquals(findMin([1, 3, 5]), 1);
  assertEquals(findMin([2, 2, 2, 0, 1]), 0);
  assertEquals(findMin([2, 2, 2, 2, 2]), 2);
  assertEquals(findMin([2, 2, 2, 5, 5]), 2);
  assertEquals(findMin([1, 3, 3]), 1);
  assertEquals(findMin([3, 3, 1, 3]), 1);
});
