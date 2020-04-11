import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import middleNode from "./middleNode.ts";
import { createSinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

Deno.test("0876. Middle of the Linked List", () => {
  assertEquals(
    middleNode(createSinglyLinkedListNode([1, 2, 3, 4, 5])),
    createSinglyLinkedListNode([3, 4, 5])
  );
  assertEquals(
    middleNode(createSinglyLinkedListNode([1, 2, 3, 4, 5, 6])),
    createSinglyLinkedListNode([4, 5, 6])
  );
});
