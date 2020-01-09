import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import detectCapitalUse from "./detectCapitalUse.ts";

test("0520. Detect Capital", () => {
  assertEquals(detectCapitalUse("USA"), true);
  assertEquals(detectCapitalUse("FlaG"), false);
  assertEquals(detectCapitalUse("G"), true);
});
