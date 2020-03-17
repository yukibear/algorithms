import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import grayCode from "./grayCode.ts";

Deno.test("0089. Gray Code", () => {
  assertEquals(grayCode(2), [0, 1, 3, 2]);
  assertEquals(grayCode(0), [0]);
});
