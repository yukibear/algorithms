import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import numOfBurgers from "./numOfBurgers.ts";

test("1276. Number of Burgers with No Waste of Ingredients", () => {
  assertEquals(numOfBurgers(16, 7), [1,6]);
  assertEquals(numOfBurgers(17, 4), []);
  assertEquals(numOfBurgers(4, 17), []);
  assertEquals(numOfBurgers(0, 0), [0,0]);
  assertEquals(numOfBurgers(2, 1), [0,1]);
});
