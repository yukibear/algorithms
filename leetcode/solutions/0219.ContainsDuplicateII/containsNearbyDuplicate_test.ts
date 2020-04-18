import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import containsNearbyDuplicate from "./containsNearbyDuplicate.ts";

Deno.test("0219. Contains Duplicate II", () => {
  assertEquals(containsNearbyDuplicate([1, 2, 3, 1], 3), true);
  assertEquals(containsNearbyDuplicate([1, 0, 1, 1], 1), true);
  assertEquals(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false);
  assertEquals(containsNearbyDuplicate([1, 2, 1], 0), false);
  assertEquals(containsNearbyDuplicate([4, 1, 2, 3, 1, 5], 3), true);
});
