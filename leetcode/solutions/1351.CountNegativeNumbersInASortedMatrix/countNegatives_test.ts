import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import countNegatives from "./countNegatives.ts";

test("1351. Count Negative Numbers in a Sorted Matrix", () => {
  assertEquals(
    countNegatives([
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3]
    ]),
    8
  );
  assertEquals(
    countNegatives([
      [3, 2],
      [1, 0]
    ]),
    0
  );
  assertEquals(
    countNegatives([
      [1, -1],
      [-1, -1]
    ]),
    3
  );
  assertEquals(countNegatives([[-1]]), 1);
});
