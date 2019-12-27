import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import myPow from "./myPow.ts";

test("0050. Pow", () => {
  assertEquals(myPow(2.00000, 10), 1024.00000);
  assertEquals(myPow(2.10000, 3), 9.26100);
  assertEquals(myPow(2.00000, -2), 0.25000);
});
