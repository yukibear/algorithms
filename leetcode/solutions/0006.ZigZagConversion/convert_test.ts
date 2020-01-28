import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import convert from "./convert.ts";

test("0006. ZigZag Conversion", () => {
  assertEquals(convert("", 0), "");
  assertEquals(convert("", 3), "");
  assertEquals(convert("A", 1), "A");
  assertEquals(convert("AB", 1), "AB");
  assertEquals(convert("AB", 2), "AB");
  assertEquals(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
  assertEquals(convert("PAYPALISHIRING", 4), "PINALSIGYAHRPI");
});
