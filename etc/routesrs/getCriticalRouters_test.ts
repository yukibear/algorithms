import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import getCriticalRouters from "./getCriticalRouters.ts";

test("Routes", () => {
  let routers: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3]
  ];
  assertEquals(getCriticalRouters(routers), [1, 2]);
  routers = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0]
  ];
  assertEquals(getCriticalRouters(routers), []);
  routers = [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4]
  ];
  assertEquals(getCriticalRouters(routers), [1, 2]);
  routers = [
    [0, 1],
    [0, 2],
    [2, 3],
    [3, 4],
    [3, 5],
    [5, 1]
  ];
  assertEquals(getCriticalRouters(routers), [3]);
});
