import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import sortedSquares from "./sortedSquares.ts";

test("0977. Squares of a Sorted Array", () => {
  assertEquals(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
  assertEquals(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]);
});
