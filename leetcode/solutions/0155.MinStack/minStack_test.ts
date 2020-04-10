import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import minStack from "./minStack.ts";

test("0155. Min Stack", () => {
  assertEquals(minStack(12345), 777);
});
