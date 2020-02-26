import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isBoomerang from "./isBoomerang.ts";

Deno.test("1037. Valid Boomerang", () => {
  assertEquals(
    isBoomerang([
      [1, 1],
      [2, 3],
      [3, 2]
    ]),
    true
  );
  assertEquals(
    isBoomerang([
      [1, 1],
      [2, 2],
      [3, 3]
    ]),
    false
  );
  assertEquals(
    isBoomerang([
      [0, 0],
      [1, 1],
      [1, 1]
    ]),
    false
  );
  assertEquals(
    isBoomerang([
      [0, 2],
      [2, 1],
      [0, 0]
    ]),
    true
  );
  assertEquals(
    isBoomerang([
      [0, 0],
      [2, 1],
      [2, 2]
    ]),
    true
  );
});
