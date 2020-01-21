import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import intersect, { intersect_BinarySearch } from "./intersect.ts";

const createTestFunc = (func: Function) => {
  const sorter = (a: number, b: number) => a - b;

  return () => {
    assertEquals(func([1, 2, 2, 1], [2, 2]).sort(sorter), [2, 2]);
    assertEquals(func([4, 9, 5], [9, 4, 9, 8, 4]).sort(sorter), [4, 9]);
    assertEquals(func([3, 1, 2], [1, 1]).sort(sorter), [1]);
    assertEquals(func([1, 2, 2, 1], [1, 1]).sort(sorter), [1, 1]);
  };
};
test("0350. Intersection of Two Arrays II", createTestFunc(intersect));
test(
  "0350. Intersection of Two Arrays II / Binary Search",
  createTestFunc(intersect_BinarySearch)
);
