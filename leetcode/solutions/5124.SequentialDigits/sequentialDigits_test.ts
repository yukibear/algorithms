import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import sequentialDigits from "./sequentialDigits.ts";

test("5124. Sequential Digits", () => {
  assertEquals(sequentialDigits(100, 300), [123,234]);
  assertEquals(sequentialDigits(1000, 13000), [1234,2345,3456,4567,5678,6789,12345]);
});
