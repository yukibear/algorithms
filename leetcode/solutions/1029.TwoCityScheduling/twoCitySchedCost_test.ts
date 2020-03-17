import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import twoCitySchedCost from "./twoCitySchedCost.ts";

Deno.test("1029. Two City Scheduling", () => {
  assertEquals(
    twoCitySchedCost([
      [10, 20],
      [30, 200],
      [400, 50],
      [30, 20]
    ]),
    110
  );
  assertEquals(
    twoCitySchedCost([
      [259, 770],
      [448, 54],
      [926, 667],
      [184, 139],
      [840, 118],
      [577, 469]
    ]),
    1859
  );
});
