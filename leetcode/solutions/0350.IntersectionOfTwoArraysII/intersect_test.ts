import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import intersect from "./intersect.ts";

test("0350. Intersection of Two Arrays II", () => {
  assertEquals(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
  assertEquals(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
  assertEquals(intersect([3, 1, 2], [1, 1]), [1]);
  assertEquals(intersect([1, 2, 2, 1], [1, 1]), [1, 1]);
});
