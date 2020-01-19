import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import containsNearbyDuplicate from "./containsNearbyDuplicate.ts";

test("0219. Contains Duplicate II", () => {
  assertEquals(containsNearbyDuplicate([1, 2, 3, 1], 3), true);
  assertEquals(containsNearbyDuplicate([1, 0, 1, 1], 1), true);
  assertEquals(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false);
});
