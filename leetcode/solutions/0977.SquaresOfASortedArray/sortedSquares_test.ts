import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import sortedSquares, { sortedSquares_OneLiner } from "./sortedSquares.ts";

const createTestFunc = (func: Function) => {
  return () => {
    assertEquals(func([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
    assertEquals(func([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]);
    assertEquals(
      func([
        -20,
        -19,
        -14,
        -12,
        -7,
        -5,
        2,
        2,
        4,
        6,
        6,
        7,
        8,
        9,
        10,
        12,
        17,
        17,
        18,
        18
      ]),
      [
        4,
        4,
        16,
        25,
        36,
        36,
        49,
        49,
        64,
        81,
        100,
        144,
        144,
        196,
        289,
        289,
        324,
        324,
        361,
        400
      ]
    );
  };
}

test("0977. Squares of a Sorted Array / One-Liner", createTestFunc(sortedSquares_OneLiner));
test("0977. Squares of a Sorted Array / Another way", createTestFunc(sortedSquares));
