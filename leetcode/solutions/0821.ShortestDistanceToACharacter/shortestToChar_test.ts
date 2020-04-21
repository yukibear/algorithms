import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import shortestToChar, { shortestToChar_another } from "./shortestToChar.ts";

const createTestFunc = (func: Function) => {
  return () => {
    assertEquals(func("loveleetcode", "e"), [
      3,
      2,
      1,
      0,
      1,
      0,
      0,
      1,
      2,
      2,
      1,
      0
    ]);
    assertEquals(func("aaba", "b"), [2, 1, 0, 1]);
  };
};

Deno.test(
  "0821. Shortest Distance to a Character",
  createTestFunc(shortestToChar)
);
Deno.test(
  "0821. Shortest Distance to a Character / Another version",
  createTestFunc(shortestToChar_another)
);
