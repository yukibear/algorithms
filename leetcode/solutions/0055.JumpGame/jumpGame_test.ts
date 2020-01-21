import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import canJump from "./jumpGame.ts";

test("0055. Jump Game", () => {
  assertEquals(canJump([2, 3, 1, 1, 4]), true);
  assertEquals(canJump([3, 2, 1, 0, 4]), false);
  assertEquals(canJump([0]), true);
  assertEquals(canJump([1, 1, 0, 1]), false);
});
