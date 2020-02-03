import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maxSideLength from "./maxSideLength.ts";

test("1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold", () => {
  assertEquals(
    maxSideLength(
      [
        [1, 1, 3, 2, 4, 3, 2],
        [1, 1, 3, 2, 4, 3, 2],
        [1, 1, 3, 2, 4, 3, 2]
      ],
      4
    ),
    2
  );
  assertEquals(
    maxSideLength(
      [
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2]
      ],
      1
    ),
    0
  );
  assertEquals(
    maxSideLength(
      [
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0]
      ],
      6
    ),
    3
  );
  assertEquals(
    maxSideLength(
      [
        [18, 70],
        [61, 1],
        [25, 85],
        [14, 40],
        [11, 96],
        [97, 96],
        [63, 45]
      ],
      40184
    ),
    2
  );
});
