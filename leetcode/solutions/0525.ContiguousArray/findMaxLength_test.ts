import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findMaxLength from "./findMaxLength.ts";

Deno.test("0525. Contiguous Array", () => {
  type test = [number[], number];
  const tests: test[] = [
    [[0, 1], 2],
    [[0, 1, 0], 2],
    [[1, 0, 1], 2],
    [[1, 0, 1, 0], 4],
    [[1, 0, 1, 0, 0], 4],
    [[1, 1, 0, 1, 0], 4],
    [[1, 0, 1, 0, 1], 4],
    [[0, 0, 0, 1, 1, 1, 0], 6],
    [[0, 0, 1, 0, 0, 0, 1, 1], 6],
  ];

  for (const [arg, want] of tests) {
    assertEquals(findMaxLength(arg), want);
  }
});
