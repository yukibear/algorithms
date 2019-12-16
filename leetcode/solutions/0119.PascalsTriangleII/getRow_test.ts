import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import getRow from "./getRow.ts";

test("0119. Pascal's Triangle II", () => {
  assertEquals(getRow(3), [1,3,3,1]);
});
