import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import maximum69Number from "./maximum69Number.ts";

test("5315. Maximum 69 Number", () => {
  assertEquals(maximum69Number(9669), 9969);
  assertEquals(maximum69Number(9996), 9999);
  assertEquals(maximum69Number(9999), 9999);
});
