import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maxSubArray from "./maxSubArray.ts";

Deno.test("0053. Maximum Subarray", () => {
  type test = [number[], number];
  const tests: test[] = [
    [[-1], -1],
    [[-3, -2, -3, -4], -2],
    [[0, 0, 0, 0, 0], 0],
    [[1, 1, 1, 1, 1], 5],
    [[1, -1, 1, -1, 1], 1],
    [[1, -1, 2, -1, 2], 3],
    [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
  ];

  for (const [arg1, want] of tests) {
    assertEquals(maxSubArray(arg1), want);
  }
});
