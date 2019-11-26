import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import search from "./search.ts";

test("0033. Search in Rotated Sorted Array", () => {
  assertEquals(search([4,5,6,7,0,1,2], 0), 4);
  assertEquals(search([4,5,6,7,0,1,2], 3), -1);
  assertEquals(search([5,1,3], 1), 1);
  assertEquals(search([5,1,3], 3), 2);
});
