import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import intersection from "./intersection.ts";

Deno.test("0349. Intersection of Two Arrays", () => {
  const sorter = (a: number, b: number) => a - b;

  assertEquals(intersection([1, 2, 2, 1], [2, 2]).sort(sorter), [2]);
  assertEquals(intersection([4, 9, 5], [9, 4, 9, 8, 4]).sort(sorter), [4, 9]);
});
