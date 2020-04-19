import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import reverseLinkedList from "./reverseLinkedList.ts";
import { CreateListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

Deno.test("0206. Reverse Linked List", () => {
  assertEquals(
    reverseLinkedList(CreateListNode([1, 2, 3, 4, 5])!),
    CreateListNode([5, 4, 3, 2, 1])!
  );
});
