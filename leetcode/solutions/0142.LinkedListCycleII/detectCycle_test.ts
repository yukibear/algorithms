import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import detectCycle from "./detectCycle.ts";
import { createSinglyLinkedListNode } from "../../../data_structures/SinglyLinkedListNode.ts";

test("0142. Linked List Cycle II", () => {
    const linkedListNode1 = createSinglyLinkedListNode([3, 2, 0, 4]);
    linkedListNode1!.next!.next!.next = linkedListNode1!.next;

  assertEquals(detectCycle(linkedListNode1),  linkedListNode1!.next);
});
