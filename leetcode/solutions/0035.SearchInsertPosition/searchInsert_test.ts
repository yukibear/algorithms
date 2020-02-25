import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import searchInsert from "./searchInsert.ts";

Deno.test("0035. Search Insert Position", () => {
  assertEquals(searchInsert([1, 3, 5, 6], 5), 2);
  assertEquals(searchInsert([1, 3, 5, 6], 2), 1);
  assertEquals(searchInsert([1, 3, 5, 6], 7), 4);
  assertEquals(searchInsert([1, 3, 5, 6], 0), 0);
});
