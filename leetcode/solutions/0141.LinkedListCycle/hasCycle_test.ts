import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import hasCycle from "./hasCycle.ts";
import { createSinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

test("0141. Linked List Cycle", () => {
  const linkedListNode1 = createSinglyLinkedListNode([3, 2, 0, 4]);
  linkedListNode1!.next!.next!.next = linkedListNode1!.next;
  assertEquals(hasCycle(linkedListNode1), true);

  const linkedListNode2 = createSinglyLinkedListNode([1, 2]);
  linkedListNode2!.next!.next = linkedListNode2!.next;
  assertEquals(hasCycle(linkedListNode2), true);

  const linkedListNode3 = createSinglyLinkedListNode([1]);
  linkedListNode3!.next = linkedListNode3;
  assertEquals(hasCycle(linkedListNode3), true);

  assertEquals(hasCycle(createSinglyLinkedListNode([3, 2, 0, 4])), false);
});
