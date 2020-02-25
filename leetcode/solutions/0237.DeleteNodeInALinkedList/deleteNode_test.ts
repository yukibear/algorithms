import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import deleteNode from "./deleteNode.ts";
import { createSinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

Deno.test("0237. Delete Node in a Linked List", () => {
  const head = createSinglyLinkedListNode([4, 5, 1, 9])!;
  deleteNode(head.next!);
  assertEquals(head, createSinglyLinkedListNode([4, 1, 9]));
});
