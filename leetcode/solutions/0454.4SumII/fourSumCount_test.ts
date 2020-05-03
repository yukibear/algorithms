import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import fourSumCount from "./fourSumCount.ts";

Deno.test("0454. 4Sum II", () => {
  type test = [[number[], number[], number[], number[]], number];
  const tests: test[] = [
    [
      [
        [1, 2],
        [-2, -1],
        [-1, 2],
        [0, 2],
      ],
      2,
    ],
  ];

  for (const [args, want] of tests) {
    assertEquals(fourSumCount(...args), want);
  }
});
