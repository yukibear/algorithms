import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maxCandies from "./maxCandies.ts";

test("1298. Maximum Candies You Can Get from Boxes", () => {
  assertEquals(
    maxCandies(
      [1, 0, 1, 0],
      [7, 5, 4, 100],
      [[], [], [1], []],
      [[1, 2], [3], [], []],
      [0]
    ),
    16
  );
  assertEquals(
    maxCandies(
      [1, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1],
      [[1, 2, 3, 4, 5], [], [], [], [], []],
      [[1, 2, 3, 4, 5], [], [], [], [], []],
      [0]
    ),
    6
  );
  assertEquals(
    maxCandies([1, 1, 1], [100, 1, 100], [[], [0, 2], []], [[], [], []], [1]),
    1
  );
  assertEquals(maxCandies([1], [100], [[]], [[]], []), 0);
  assertEquals(
    maxCandies([1, 1, 1], [2, 3, 2], [[], [], []], [[], [], []], [2, 1, 0]),
    7
  );
  assertEquals(
    maxCandies(
      [1, 0, 0, 0],
      [1, 2, 3, 4],
      [[1, 2], [3], [], []],
      [[2], [3], [1], []],
      [0]
    ),
    10
  );
});
