import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import buddyStrings from "./buddyStrings.ts";

test("0859. Buddy Strings", () => {
  assertEquals(buddyStrings("ab", "ba"), true);
  assertEquals(buddyStrings("ab", "ab"), false);
  assertEquals(buddyStrings("aa", "aa"), true);
  assertEquals(buddyStrings("aaaaaaabc", "aaaaaaacb"), true);
  assertEquals(buddyStrings("", "aa"), false);
});
