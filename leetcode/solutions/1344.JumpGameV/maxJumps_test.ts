import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maxJumps from "./maxJumps.ts";

Deno.test("1344. Jump Game V", () => {
  assertEquals(maxJumps([6, 4, 14, 6], 2), 3);
  assertEquals(maxJumps([6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2), 4);
  assertEquals(maxJumps([3, 3, 3, 3, 3], 3), 1);
  assertEquals(maxJumps([7, 6, 5, 4, 3, 2, 1], 1), 7);
  assertEquals(maxJumps([7, 1, 7, 1, 7, 1], 2), 2);
  assertEquals(maxJumps([66], 1), 1);
});
