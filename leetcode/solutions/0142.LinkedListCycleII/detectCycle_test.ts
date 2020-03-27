import {
  assertNotEquals,
  assertStrictEq,
} from "https://deno.land/std/testing/asserts.ts";
import detectCycle from "./detectCycle.ts";
import { createSinglyLinkedListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

Deno.test("0142. Linked List Cycle II", () => {
  const head1 = createSinglyLinkedListNode([3, 2, 0, 4]);
  head1!.next!.next!.next!.next = head1!.next;

  assertStrictEq(detectCycle(head1), head1!.next);
  assertNotEquals(detectCycle(head1), head1!.next!.next);
  assertNotEquals(detectCycle(head1), head1!.next!.next!.next);

  const head2 = createSinglyLinkedListNode([1, 2]);
  head2!.next!.next! = head2!;

  assertStrictEq(detectCycle(head2), head2);
  assertNotEquals(detectCycle(head2), head2!.next);
});
