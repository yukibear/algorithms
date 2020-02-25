import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import search from "./search.ts";

Deno.test("0081. Search in Rotated Sorted Array II", () => {
  assertEquals(search([2, 2, 2, 2, 2, 5, 6, 0, 0, 1, 2], 0), true);
  assertEquals(search([2, 5, 6, 0, 0, 1, 2], 3), false);
  assertEquals(search([2, 2, 2, 0, 2, 2], 0), true);
});
