import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import productExceptSelf from "./productExceptSelf.ts";

Deno.test("0238. Product of Array Except Self", () => {
  type test = [number[], number[]];
  const tests: test[] = [
    // [
    // 	[1, 2, 3, 4],
    // 	[24, 12, 8, 6],
    // ],
    [
      [0, 1],
      [1, 0],
    ],
    // [
    // 	[0, 0, 0, 0],
    // 	[0, 0, 0, 0],
    // ],
    // [
    // 	[1, 1, 1, 1],
    // 	[1, 1, 1, 1],
    // ],
    // [
    // 	[0, 1, 2, 3, 4, 0],
    // 	[0, 0, 0, 0, 0, 0],
    // ],
    // [
    // 	[0, 1, 2, 3, 4],
    // 	[24, 0, 0, 0, 0],
    // ],
  ];

  for (const [arg, want] of tests) {
    assertEquals(productExceptSelf(arg), want);
  }
});
