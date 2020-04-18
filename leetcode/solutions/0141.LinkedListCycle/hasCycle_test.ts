import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import hasCycle from "./hasCycle.ts";
import { CreateListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

Deno.test("0141. Linked List Cycle", () => {
  const linkedListNode1 = CreateListNode([3, 2, 0, 4]);
  linkedListNode1!.next!.next!.next = linkedListNode1!.next;
  assertEquals(hasCycle(linkedListNode1), true);

  const linkedListNode2 = CreateListNode([1, 2]);
  linkedListNode2!.next!.next = linkedListNode2!.next;
  assertEquals(hasCycle(linkedListNode2), true);

  const linkedListNode3 = CreateListNode([1]);
  linkedListNode3!.next = linkedListNode3;
  assertEquals(hasCycle(linkedListNode3), true);

  assertEquals(hasCycle(CreateListNode([3, 2, 0, 4])), false);
});
