import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import combinationSum from "./combinationSum.ts";

Deno.test("0039. Combination Sum", () => {
  type test = [[number[], number], number[][]];
  const tests: test[] = [
    [
      [[2, 3, 6, 7], 7],
      [[2, 2, 3], [7]],
    ],
    [
      [[2, 3, 5], 8],
      [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ],
    ],
    [
      [[3, 12, 9, 11, 6, 7, 8, 5, 4], 15],
      [
        [3, 3, 3, 3, 3],
        [3, 3, 3, 6],
        [3, 3, 4, 5],
        [3, 3, 9],
        [3, 4, 4, 4],
        [3, 4, 8],
        [3, 5, 7],
        [3, 6, 6],
        [3, 12],
        [4, 4, 7],
        [4, 5, 6],
        [4, 11],
        [5, 5, 5],
        [6, 9],
        [7, 8],
      ],
    ],
  ];

  for (const [args, want] of tests) {
    assertEquals(combinationSum(...args), want);
  }
});
