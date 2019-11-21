import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import allCellsDistOrder from "./allCellsDistOrder.ts";

test("1030. Matrix Cells in Distance Order", () => {
  assertEquals(allCellsDistOrder(1, 2, 0, 0), [[0,0],[0,1]]);
  assertEquals(allCellsDistOrder(2, 2, 0, 1), [[0,1],[0,0],[1,1],[1,0]]);
  assertEquals(allCellsDistOrder(2, 3, 1, 2), [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]);
});
