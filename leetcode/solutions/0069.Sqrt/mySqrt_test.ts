import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import mySqrt from "./mySqrt.ts";

Deno.test("0069. Sqrt", () => {
  assertEquals(mySqrt(4), 2);
  assertEquals(mySqrt(8), 2);
});
