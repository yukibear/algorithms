import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import nQueenProblem, { inLeftRange } from "./nQueenProblem.ts";

Deno.test("inRange", () => {
  const arr = [
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];

  assertEquals(inLeftRange(arr, 7, 7), true);
  assertEquals(inLeftRange(arr, 0, 2), true);
  assertEquals(inLeftRange(arr, 2, 3), true);
  assertEquals(inLeftRange(arr, 3, 2), true);
  assertEquals(inLeftRange(arr, 4, 2), false);
  assertEquals(inLeftRange(arr, 3, 4), false);
  assertEquals(inLeftRange(arr, 1, 2), true);
});

Deno.test("N Queen Problem", () => {
  const result = [
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0]
  ];
  assertEquals(nQueenProblem(), result);
});
