import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import getCriticalRouters from "./getCriticalRouters.ts";

test("0001. Two Sum", () => {
  let routers = [
    [0, 1],
    [1, 2],
    [2, 3],
  ];
  assertEquals(getCriticalRouters(routers), [1]);
});
