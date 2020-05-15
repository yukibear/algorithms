import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import MapSum from "./MapSum.ts";

Deno.test("0677. Map Sum Pairs", () => {
  const mapSum = new MapSum();

  mapSum.insert("apple", 3);
  assertEquals(mapSum.sum("ap"), 3);

  mapSum.insert("app", 2);
  assertEquals(mapSum.sum("ap"), 5);
});
