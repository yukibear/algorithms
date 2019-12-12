import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import stalinSort from "./stalinSort.ts";

test("sorts: Starlin Sort", () => {
  assertEquals(stalinSort([]), []);
  assertEquals(stalinSort([1]), [1]);
  assertEquals(stalinSort([0, 1, 2, 3]), [0, 1, 2, 3]);
  assertEquals(stalinSort([1, 3, 2, 0]), [1, 3]);
  assertEquals(stalinSort([3, 1, 2, 0]), [3]);
  assertEquals(stalinSort([3, 1, 2, -1]), [3]);
  assertEquals(stalinSort([-1, 3, 1, 2]), [-1, 3]);
  assertEquals(stalinSort([-1, 0, 2, 3]), [-1, 0, 2, 3]);
});
