import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isPossibleDivide from "./isPossibleDivide.ts";

test("1296. Divide Array in Sets of K Consecutive Numbers", () => {
  assertEquals(
    isPossibleDivide([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3),
    true
  );
  assertEquals(isPossibleDivide([1, 2, 3, 3, 4, 4, 5, 6], 4), true);
  assertEquals(
    isPossibleDivide(
      [15, 16, 17, 18, 19, 16, 17, 18, 19, 20, 6, 7, 8, 9, 10, 3, 4, 5, 6, 20],
      5
    ),
    false
  );
  assertEquals(isPossibleDivide([3, 3, 2, 2, 1, 1], 3), true);
  assertEquals(isPossibleDivide([1, 2, 3, 4], 3), false);
});
