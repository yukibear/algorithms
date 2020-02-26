import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import search from "./search.ts";

Deno.test("0704. Binary Search", () => {
  assertEquals(search([-1, 0, 3, 5, 9, 12], 9), 4);
  assertEquals(search([-1, 0, 3, 5, 9, 12], 2), -1);
});
