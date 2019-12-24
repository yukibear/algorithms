import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import addTwoNumbers from "./addTwoNumbers.ts";
import { createSinglyLinkedListNode as createNode } from "../../../data_structures/SinglyLinkedListNode.ts";

test("0002. Add Two Numbers", () => {
  assertEquals(
    addTwoNumbers(
      createNode([2, 4, 3]),
      createNode([5, 6, 4])
    ),
    createNode([7, 0, 8])
  );
});
