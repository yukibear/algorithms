import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import addTwoNumbers from "./addTwoNumbers.ts";
import { createSinglyLinkedListNode as createNode } from "../../../data_structures/SinglyLinkedListNode.ts";

test("0002. Add Two Numbers", () => {
  assertEquals(
    addTwoNumbers(createNode([2, 4, 3]), createNode([5, 6, 4])),
    createNode([7, 0, 8])
  );
  assertEquals(
    addTwoNumbers(createNode([0]), createNode([0])),
    createNode([0])
  );
  assertEquals(
    addTwoNumbers(createNode([1, 8]), createNode([0])),
    createNode([1, 8])
  );
  assertEquals(
    addTwoNumbers(
      createNode([
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ]),
      createNode([5, 6, 4])
    ),
    createNode([
      6,
      6,
      4,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1
    ])
  );
  assertEquals(
    addTwoNumbers(createNode([5]), createNode([5])),
    createNode([0, 1])
  );
  assertEquals(
    addTwoNumbers(createNode([9, 9]), createNode([9])),
    createNode([8, 0, 1])
  );
});
