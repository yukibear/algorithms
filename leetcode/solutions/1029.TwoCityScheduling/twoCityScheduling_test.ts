import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import twoCitySchedCost from "./twoCitySchedCost.ts";

test("1029. Two City Scheduling", () => {
  assertEquals(
    twoCitySchedCost([
      [10, 20], [30, 200], [400, 50], [30, 20]
    ]),
    110
  );
});
