import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import reverseLinkedList from "./reverseLinkedList.ts";
import { createSinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

test("0206. Reverse Linked List", () => {
  assertEquals(
    reverseLinkedList(createSinglyLinkedListNode([1, 2, 3, 4, 5])!),
    createSinglyLinkedListNode([5, 4, 3, 2, 1])!
  );
});
