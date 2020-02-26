import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import quickSort from "./quickSort.ts";

Deno.test("sorts: Quick Sort", () => {
  assertEquals(quickSort([]), []);
  assertEquals(quickSort([1]), [1]);

  const sortedArr1: number[] = [0, 1, 2, 3];

  assertEquals(quickSort([0, 1, 2, 3]), sortedArr1);
  assertEquals(quickSort([1, 3, 0, 2]), sortedArr1);
  assertEquals(quickSort([3, 2, 1, 0]), sortedArr1);
  assertEquals(quickSort([3, 1, 1, 3]), [1, 1, 3, 3]);

  const sortedArr2: number[] = [-1, 0, 1, 2, 3];

  assertEquals(quickSort([-1, 0, 1, 2, 3]), sortedArr2);
  assertEquals(quickSort([3, 2, 1, 0, -1]), sortedArr2);
  assertEquals(quickSort([2, -1, 0, 3, 1]), sortedArr2);
  assertEquals(quickSort([2, -1, -1, 3, 2]), [-1, -1, 2, 2, 3]);
});
