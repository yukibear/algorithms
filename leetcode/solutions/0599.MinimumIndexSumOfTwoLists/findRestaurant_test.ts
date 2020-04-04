import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import findRestaurant from "./findRestaurant.ts";

Deno.test("0599. Minimum Index Sum of Two Lists", () => {
  type test = [[string[], string[]], string[]];
  const tests: test[] = [
    [
      [
        ["Shogun", "KFC", "Burger King"],
        ["KFC", "Shogun", "Burger King"],
      ],
      ["Shogun", "KFC"],
    ],
    [
      [
        ["Shogun", "Tapioca Express", "Burger King", "KFC"],
        [
          "Piatti",
          "The Grill at Torrey Pines",
          "Hungry Hunter Steakhouse",
          "Shogun",
        ],
      ],
      ["Shogun"],
    ],
    [
      [
        ["Shogun", "Tapioca Express", "Burger King", "KFC"],
        ["KFC", "Shogun", "Burger King"],
      ],
      ["Shogun"],
    ],
    [
      [
        ["Shogun", "Tapioca Express", "Burger King", "KFC"],
        ["Tapioca Express", "Burger King", "Shogun"],
      ],
      ["Tapioca Express"],
    ],
  ];

  const sorter = (a: string, b: string) => b.localeCompare(a);

  for (const [args, want] of tests) {
    assertEquals(findRestaurant(...args).sort(sorter), want.sort(sorter));
  }
});
