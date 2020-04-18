import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import convertToTitle from "./convertToTitle.ts";

Deno.test("0168. Excel Sheet Column Title", () => {
  assertEquals(convertToTitle(1), "A");
  assertEquals(convertToTitle(28), "AB");
  assertEquals(convertToTitle(701), "ZY");
  assertEquals(convertToTitle(703), "AAA");
});
