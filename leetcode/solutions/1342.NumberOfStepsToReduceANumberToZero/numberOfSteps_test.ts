import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {
  numberOfSteps_Bitwise,
  numberOfSteps_DividingByTwo,
} from "./numberOfSteps.ts";

type test = [number, number];
const tests: test[] = [
  [0, 0],
  [1, 1],
  [2, 2],
  [8388608, 24], // 8388608 = 2^23
  [14, 6],
  [8, 4],
];

Deno.test("1342. Number of Steps to Reduce a Number to Zero / Bitwise", () => {
  for (const [arg, want] of tests) {
    assertEquals(numberOfSteps_Bitwise(arg), want);
  }
});

Deno.test(
  "1342. Number of Steps to Reduce a Number to Zero / Dividing by 2",
  () => {
    for (const [arg, want] of tests) {
      assertEquals(numberOfSteps_DividingByTwo(arg), want);
    }
  }
);
