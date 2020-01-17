import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import intersect, { intersect_BinarySearch } from "./intersect.ts";

const createTestFunc = (func: Function) => {
  return () => {
    assertEquals(func([1, 2, 2, 1], [2, 2]), [2, 2]);
    assertEquals(func([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
    assertEquals(func([3, 1, 2], [1, 1]), [1]);
    assertEquals(func([1, 2, 2, 1], [1, 1]), [1, 1]);
  }
}
test(
  "0350. Intersection of Two Arrays II",
  createTestFunc(intersect)
);
test(
  "0350. Intersection of Two Arrays II / Binary Search",
  createTestFunc(intersect_BinarySearch)
);
