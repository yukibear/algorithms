import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findMin from "./findMin.ts";

Deno.test("0153. Find Minimum in Rotated Sorted Array", () => {
  assertEquals(findMin([3, 4, 5, 1, 2]), 1);
  assertEquals(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
});
