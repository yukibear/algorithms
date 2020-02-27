import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import RecentCounter from "./RecentCounter.ts";

Deno.test("0933. Number of Recent Calls", () => {
  const counter = new RecentCounter();

  assertEquals(counter.ping(1), 1);
  assertEquals(counter.ping(100), 2);
  assertEquals(counter.ping(3001), 3);
  assertEquals(counter.ping(3002), 3);
});
