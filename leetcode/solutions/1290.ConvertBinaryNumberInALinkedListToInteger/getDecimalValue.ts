import { SinglyLinkedListNode as ListNode } from "../../../datastructure/SinglyLinkedListNode.ts";

export default function getDecimalValue(head: ListNode<number> | null): number {
  let bit = 0;

  while (head) {
    bit <<= 1;
    bit |= head.val;
    head = head.next;
  }

  return bit;
}
