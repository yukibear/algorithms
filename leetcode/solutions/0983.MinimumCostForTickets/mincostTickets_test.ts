import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import mincostTickets from "./mincostTickets.ts";

Deno.test("0983. Minimum Cost For Tickets", () => {
  assertEquals(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]), 11);
  assertEquals(
    mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]),
    17
  );
});
