import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import MyHashSet from "./MyHashSet.ts";

test("0705. Design HashSet", () => {
  const hashSet = new MyHashSet();

  hashSet.add(1);
  hashSet.add(2);
  assertEquals(hashSet.contains(1), true);
  assertEquals(hashSet.contains(3), false);

  hashSet.add(2);
  assertEquals(hashSet.contains(2), true);

  hashSet.remove(2);
  assertEquals(hashSet.contains(2), false);
});
