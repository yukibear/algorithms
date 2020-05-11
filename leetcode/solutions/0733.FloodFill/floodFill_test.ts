import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import floodFill from "./floodFill.ts";

Deno.test("0733. Flood Fill", () => {
  type args = [number[][], number, number, number];
  type test = [args, number[][]];
  const tests: test[] = [
    [
      [
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2,
      ],
      [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
      ],
    ],
    [
      [
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        2,
      ],
      [
        [2, 2, 2],
        [2, 2, 2],
      ],
    ],
    [
      [
        [
          [0, 0, 0],
          [0, 1, 1],
        ],
        1,
        1,
        1,
      ],
      [
        [0, 0, 0],
        [0, 1, 1],
      ],
    ],
  ];

  for (const [args, want] of tests) {
    assertEquals(floodFill(...args), want);
  }
});
