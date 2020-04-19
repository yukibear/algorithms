import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import daysBetweenDates from "./daysBetweenDates.ts";

Deno.test("1360. Number of Days Between Two Dates", () => {
  assertEquals(daysBetweenDates("2019-06-29", "2019-06-30"), 1);
  assertEquals(daysBetweenDates("2020-01-15", "2019-12-31"), 15);
});
