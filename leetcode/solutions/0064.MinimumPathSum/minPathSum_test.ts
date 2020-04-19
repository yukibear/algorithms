import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minPathSum from "./minPathSum.ts";

Deno.test("0064. Minimum Path Sum", () => {
  type test = [number[][], number];
  const tests: test[] = [
    [
      [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ],
      7,
    ],
    [[[1]], 1],
    [[[0]], 0],
    [
      [
        [1, 1],
        [2, 1],
      ],
      3,
    ],
    [
      [
        [1, 2, 5],
        [3, 2, 1],
      ],
      6,
    ],
  ];

  for (const [arg, want] of tests) {
    assertEquals(minPathSum(arg), want);
  }
});
