import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isPowerOfTwo from "./isPowerOfTwo.ts";

Deno.test("0231. Power of Two", () => {
  assertEquals(isPowerOfTwo(1), true);
  assertEquals(isPowerOfTwo(16), true);
  assertEquals(isPowerOfTwo(218), false);
  assertEquals(isPowerOfTwo(-2147483648), false);
});
