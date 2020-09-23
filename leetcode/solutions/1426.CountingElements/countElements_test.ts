import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import countElements from "./countElements.ts";

Deno.test("1426. CountingElements", () => {
  type test = [number[] | null, number];
  const tests: test[] = [
    [null, 0],
    [[1], 0],
    [[1, 1, 1], 0],
    [[1, 2, 3], 2],
    [[1, 1, 2], 2],
    [[1, 1, 3, 3, 5, 5, 7, 7], 0],
    [[1, 3, 2, 3, 5, 0], 3],
    [[1, 1, 2, 2], 2],
  ];

  for (const [arg1, want] of tests) {
    assertEquals(countElements(arg1), want);
  }
});
