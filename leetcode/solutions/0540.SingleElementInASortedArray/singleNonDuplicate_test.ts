import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import singleNonDuplicate from "./singleNonDuplicate.ts";

Deno.test("0540. Single Element in a Sorted Array", () => {
  type test = [number[], number];
  const tests: test[] = [
    [[1, 1, 2, 3, 3, 4, 4, 8, 8], 2],
    [[3, 3, 7, 7, 10, 11, 11], 10],
  ];

  for (const [arg, want] of tests) {
    assertEquals(singleNonDuplicate(arg), want);
  }
});
