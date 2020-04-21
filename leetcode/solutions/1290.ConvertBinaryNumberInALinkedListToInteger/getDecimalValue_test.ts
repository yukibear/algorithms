import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import getDecimalValue from "./getDecimalValue.ts";
import { CreateListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

Deno.test("1290. Convert Binary Number in a Linked List to Integer", () => {
  assertEquals(getDecimalValue(CreateListNode([1, 0, 1])), 5);
  assertEquals(getDecimalValue(CreateListNode([0])), 0);
  assertEquals(getDecimalValue(CreateListNode([1])), 1);
  assertEquals(
    getDecimalValue(
      CreateListNode([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])
    ),
    18880
  );
  assertEquals(getDecimalValue(CreateListNode([0, 0])), 0);
});
