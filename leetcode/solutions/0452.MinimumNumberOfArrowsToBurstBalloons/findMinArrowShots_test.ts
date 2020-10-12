import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findMinArrowShots from "./findMinArrowShots.ts";

Deno.test("0452. Minimum Number of Arrows to Burst Balloons", () => {
  type test = [[number, number][], number];
  const tests: test[] = [
    // [
    //   [[1, 2], [3, 4], [5, 6], [7, 8]],
    //   4,
    // ],
    // [
    //   [[1, 2], [2, 3], [3, 4], [4, 5]],
    //   2,
    // ],
    // [
    //   [[1, 2]],
    //   1,
    // ],
    // [
    //   [[2, 3], [2, 3]],
    //   1,
    // ],
    // [
    //   [[3, 9], [7, 12], [3, 8], [6, 8], [9, 10], [2, 9], [0, 9], [3, 9], [0, 6], [2, 8]],
    //   2,
    // ],
    [
      [[1, 9], [7, 16], [2, 5], [7, 12], [9, 11], [2, 10], [9, 16], [3, 9], [1, 3]],
      2
    ],
  ];

  for (const [arg, want] of tests) {
    assertEquals(findMinArrowShots(arg), want);
  }
});
