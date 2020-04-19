import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import displayTable from "./displayTable.ts";

Deno.test("1418. Display Table of Food Orders in a Restaurant", () => {
  type test = [string[][], string[][]];
  const tests: test[] = [
    [
      [
        ["Laura", "2", "Bean Burrito"],
        ["Jhon", "2", "Beef Burrito"],
        ["Melissa", "2", "Soda"],
      ],
      [
        ["Table", "Bean Burrito", "Beef Burrito", "Soda"],
        ["2", "1", "1", "1"],
      ],
    ],
    [
      [
        ["James", "12", "Fried Chicken"],
        ["Ratesh", "12", "Fried Chicken"],
        ["Amadeus", "12", "Fried Chicken"],
        ["Adam", "1", "Canadian Waffles"],
        ["Brianna", "1", "Canadian Waffles"],
      ],
      [
        ["Table", "Canadian Waffles", "Fried Chicken"],
        ["1", "2", "0"],
        ["12", "0", "3"],
      ],
    ],
    [
      [
        ["David", "3", "Ceviche"],
        ["Corina", "10", "Beef Burrito"],
        ["David", "3", "Fried Chicken"],
        ["Carla", "5", "Water"],
        ["Carla", "5", "Ceviche"],
        ["Rous", "3", "Ceviche"],
      ],
      [
        ["Table", "Beef Burrito", "Ceviche", "Fried Chicken", "Water"],
        ["3", "0", "2", "1", "0"],
        ["5", "0", "1", "0", "1"],
        ["10", "1", "0", "0", "0"],
      ],
    ],
  ];

  for (const [arg, want] of tests) {
    assertEquals(displayTable(arg), want);
  }
});
