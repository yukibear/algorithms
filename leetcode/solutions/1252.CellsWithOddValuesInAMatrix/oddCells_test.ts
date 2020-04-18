import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import oddCells from "./oddCells.ts";

Deno.test("1252. Cells with Odd Values in a Matrix", () => {
  assertEquals(oddCells(2, 3, [[0, 1], [1, 1]]), 6);
  assertEquals(oddCells(2, 2, [[1, 1], [0, 0]]), 0);
});
