import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import merge from "./merge.ts";

Deno.test("0088. Merge Sorted Array", () => {
  const arr1 = [1, 2, 3, 0, 0, 0];
  merge(arr1, 3, [2, 5, 6], 3);
  assertEquals(arr1, [1, 2, 2, 3, 5, 6]);

  const arr2 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
  merge(arr2, 6, [1, 2, 2], 3);
  assertEquals(arr2, [-1, 0, 0, 1, 2, 2, 3, 3, 3]);
});
