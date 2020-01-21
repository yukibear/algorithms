import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import myPow from "./myPow.ts";

test("0050. Pow", () => {
  assertEquals(myPow(2.0, 10), 1024.0);
  assertEquals(myPow(2.1, 3), 9.261);
  assertEquals(myPow(2.0, -2), 0.25);
});
