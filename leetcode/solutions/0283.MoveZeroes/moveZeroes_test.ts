import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import moveZeroes from "./moveZeroes.ts";

Deno.test("0283. Move Zeroes", () => {
  type test = [
    number[],
    number[],
  ];
  const tests: test[] = [
		[[0], [0]],
		[[1], [1]],
		[[0, 0, 0], [0, 0, 0]],
		[[0, 1, 0], [1, 0, 0]],
    [[3, 2, 1], [3, 2, 1]],
    [[0, 1, 0, 3, 12], [1, 3, 12, 0, 0]],
  ]

  for (const [arg1, want] of tests) {
    moveZeroes(arg1);
    assertEquals(arg1, want);
  }
});
