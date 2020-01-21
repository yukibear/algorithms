import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import countSquares from "./countSquares.ts";

test("1277. Count Square Submatrices with All Ones", () => {
  let matrix = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
  ];
  assertEquals(countSquares(matrix), 15);
  matrix = [
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0]
  ];
  assertEquals(countSquares(matrix), 7);
});
