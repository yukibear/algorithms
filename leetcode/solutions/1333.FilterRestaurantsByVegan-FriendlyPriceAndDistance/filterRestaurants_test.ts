import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import filterRestaurants from "./filterRestaurants.ts";

test("1333. Filter Restaurants by Vegan-Friendly, Price and Distance", () => {
  assertEquals(
    filterRestaurants(
      [
        [1, 4, 1, 40, 10],
        [2, 8, 0, 50, 5],
        [3, 8, 1, 30, 4],
        [4, 10, 0, 10, 3],
        [5, 1, 1, 15, 1]
      ],
      1,
      50,
      10
    ),
    [3, 1, 5]
  );
  assertEquals(
    filterRestaurants(
      [
        [1, 4, 1, 40, 10],
        [2, 8, 0, 50, 5],
        [3, 8, 1, 30, 4],
        [4, 10, 0, 10, 3],
        [5, 1, 1, 15, 1]
      ],
      0,
      50,
      10
    ),
    [4, 3, 2, 1, 5]
  );
  assertEquals(
    filterRestaurants(
      [
        [1, 4, 1, 40, 10],
        [2, 8, 0, 50, 5],
        [3, 8, 1, 30, 4],
        [4, 10, 0, 10, 3],
        [5, 1, 1, 15, 1]
      ],
      0,
      30,
      3
    ),
    [4, 5]
  );
});
