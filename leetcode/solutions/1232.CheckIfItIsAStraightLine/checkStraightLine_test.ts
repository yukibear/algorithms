import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import checkStraightLine from "./checkStraightLine.ts";

Deno.test("1232. Check If It Is a Straight Line", () => {
  type test = [[number, number][], boolean];
  const tests: test[] = [
    [[[1, 2]], false],
    [
      [
        [-1, 2],
        [-2, 3],
        [-3, 4],
      ],
      true,
    ],
    [
      [
        [-1, 2],
        [-2, 4],
      ],
      true,
    ],
    [
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7],
      ],
      true,
    ],
    [
      [
        [1, 1],
        [2, 2],
        [3, 4],
        [4, 5],
        [5, 6],
        [7, 7],
      ],
      false,
    ],
  ];

  for (const [arg, want] of tests) {
    assertEquals(checkStraightLine(arg), want);
  }
});
