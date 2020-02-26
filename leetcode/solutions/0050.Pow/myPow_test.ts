import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import myPow from "./myPow.ts";

Deno.test("0050. Pow", () => {
  assertEquals(myPow(2.0, 10), 1024.0);
  // TODO: need to fix this
  assertEquals(myPow(2.1, 3), 9.261000000000001);
  assertEquals(myPow(2.0, -2), 0.25);
});
